const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult} = require('express-validator');

const Profile = require('../../models/Profile');
const User = require('../../models/User');

//@route    GET api/profile/me
//@desc     Get current users profile
//@access   Private
router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id })
      .populate('user', ['name', 'avatar']);
    
    if (!profile) {
      return res.status(400).json({ msg: 'There is no profile for this user' })
    }
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error')
  }
});

//@route    POST api/profile
//@desc     Create or Update a user profile
//@access   Private
router.post('/', [ auth, [
  check('status', 'Status is required').not().isEmpty(),
  check('skills', 'Skills are required').not().isEmpty()
]], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({errors: errors.array()})
  }

  const {
    company,
    website,
    location,
    bio,
    status,
    githubusername,
    skills,
    youtube,
    facebook,
    twitter,
    instagram,
    linkedin
  } = req.body;

  // Build profile object
  const profilefields = {};
  profilefields.user = req.user.id;
  if (company) profilefields.company = company;
  if (website) profilefields.website = website;
  if (location) profilefields.location = location;
  if (bio) profilefields.bio = bio;
  if (status) profilefields.status = status;
  if (githubusername) profilefields.githubusername = githubusername;
  if(skills) {
    // Doesn't matter if there is any amount of spaces
    profilefields.skills = skills.split(',').map(skill => skill.trim());
  }

  // Build social object
  profilefields.social = {};
  if (youtube) profilefields.social.youtube = youtube;
  if (twitter) profilefields.social.twitter = twitter;
  if (facebook) profilefields.social.company = company;
  if (linkedin) profilefields.social.linkedin = linkedin;
  if (instagram) profilefields.social.instagram = instagram;

  try {
    let profile = await Profile.findOne({ user: req.user.id });

    if(profile) {
      // Update
      profile = await Profile.findOneAndUpdate(
        { user: req.user.id }, 
        { $set: profilefields},
        { new: true }
      );

      return res.json(profile);
    }

    // Create
    profile = new Profile(profilefields);

    await profile.save();
    res.json(profile);

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error')
  }
  res.send('Hello')
});

//@route    GET api/profile
//@desc     Get all profiles
//@access   Public
router.get('/', async (req, res) => {
  try {
    const profiles = await Profile.find().populate('user', ['name', 'avatar']);
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error')
  }
});

//@route    GET api/profile/user/:user_id
//@desc     Get profile by user ID
//@access   Public
router.get('/user/:user_id', async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.user_id 
    }).populate('user', ['name', 'avatar']);

    if (!profile) {
      return res.status(400).json({ msg: 'Profile not found'});
    }
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    if(err.kind == 'ObjectId') {
      return res.status(400).json({ msg: 'Profile not found'});
    }

    res.status(500).send('Server error')
  }
});

//@route    DELETE api/profile
//@desc     Delete profile, user & posts
//@access   Private
router.delete('/', auth, async (req, res) => {
  try {
    // @todo- remove users posts

    // Remove profile
    await Profile.findOneAndRemove({ user: req.user.id});
    // Remove User
    await User.findOneAndRemove({ _id: req.user.id});

    res.json({ msg: 'User deleted'});
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error')
  }
});

//@route    PUT api/profile/experience
//@desc     Add profile experience 
//@access   Private
router.put('/experience', [auth, [
  check('title', 'Title is required')
    .not()
    .isEmpty(),
  check('company', 'Company is required')
    .not()
    .isEmpty(),
  check('from', 'From date is required')
    .not()
    .isEmpty()
]], async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array()});
    }

    const {
      title,
      company,
      location,
      from,
      to,
      current,
      description
    } = req.body;

    const newExp = {
      title,
      company,
      location,
      from,
      to,
      current,
      description
    }

    try {
      const profile = await Profile.findOne({ user: req.user.id });
      profile.experience.unshift(newExp);
      
      await profile.save()

      res.json(profile);

    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error')
    }
  }
);

module.exports = router;