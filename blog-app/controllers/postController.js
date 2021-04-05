exports.createPost = catchAsync(async (req, res, next) => {
  try {
    const post = await Post.create(req.body);

    res.status(200).json({
      status: 'success',
      data: post,
    });
  } catch (err) {
    res.status(500).json({
      status: 'err',
      data: err,
    });
  }
});

exports.getAllPost = catchAsync(async (req, res, next) => {
  try {
    const post = await post.create(req.body);

    res.status(200).json({
      status: 'success',
      data: post,
    });
  } catch (err) {
    res.status(500).json({
      status: 'err',
      data: err,
    });
  }
});

exports.getpost = catchAsync(async (req, res, next) => {
  const post = await post.findById(req.params.id).populate('products');

  if (!post) {
    return next(new AppError('No post found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: post,
  });
});

exports.updatepost = catchAsync(async (req, res, next) => {
  try {
    const post = await post.create(req.body);

    res.status(200).json({
      status: 'success',
      data: post,
    });
  } catch (err) {
    res.status(500).json({
      status: 'err',
      data: err,
    });
  }
});

exports.deletepost = catchAsync(async (req, res, next) => {
  try {
    const post = await post.create(req.body);

    res.status(200).json({
      status: 'success',
      data: post,
    });
  } catch (err) {
    res.status(500).json({
      status: 'err',
      data: err,
    });
  }
});
