var express = require('express');
var path = require('path');
var db = require('./mongoosedb.js');
var Post = require('./models/post.js');

var app = express();

/* A template engine enables you to use static template files in your application. At runtime, the template engine replaces variables in a template file with actual values, and transforms the template into an HTML file sent to the client. */

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use('/public', express.static(path.join(__dirname, '/public')));

app.get('/about', function (req, res) {
  res.render('about');
});

app.get('/contact', function (req, res) {
  res.render('contact');
});

//simple adding document.
app.post('/create', async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.status(200).json({
      status: 'success',
      data: post,
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: 'fail',
      data: err,
    });
  }

  // var post = new Post({
  //   title: 'Some title',
  //   body: 'some body',
  //   author: 'Aziz Qadeer',
  //   date: new Date(),
  // });

  // post.save((err, post) => {
  //   if (err) {
  //     console.log(err);
  //   }

  //   console.log(post);
  // });
});
//GET ALL POST FROM DATABASE
app.get('/post', async (req, res) => {
  try {
    const post = await Post.find();
    res.status(200).json({
      status: 'success',
      data: post,
    });
  } catch (err) {
    console.log(err);
  }
});
//GET A SPECIFIC POST FROM DATABASE WITH ID
app.get('/post/:id', async (req, res) => {
  try {
    const post = await Post.find(req.params.id);
    res.status(200).json({
      status: 'success',
      data: post,
    });
  } catch (err) {
    console.log(err);
  }
});

//UPDATE A POST
app.patch('/post/:id', async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      status: 'success',
      data: post,
    });
  } catch (err) {
    console.log(err);
  }
});
//DELETE A POST WITH ID
app.delete('/post/:id', async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: 'success',
      data: post,
    });
  } catch (err) {
    console.log(err);
  }
});

app.get('/', function (req, res) {
  Post.find((err, posts) => {
    if (err) {
      console.log('Error getting post');
    }

    console.log(posts);
    res.render('index', {
      posts: posts,
    });
  });
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`app running on port ${port}...`);
});
