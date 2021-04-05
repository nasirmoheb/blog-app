exports.createPost = catchAsync(async (req, res, next) => {
  const Post = await Post.create(req.body);

  res.status(200).json({
    status: 'success',
    data: Post,
  });
});

exports.getAllPost = catchAsync(async (req, res, next) => {
  const Post = await Post.find();

  res.status(200).json({
    status: 'success',
    data: Post,
  });
});

exports.getPost = catchAsync(async (req, res, next) => {
  const Post = await Post.findById(req.params.id).populate('products');

  if (!Post) {
    return next(new AppError('No Post found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: Post,
  });
});

exports.updatePost = catchAsync(async (req, res, next) => {
  const Post = await Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!Post) {
    return next(new AppError('No Post found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: Post,
  });
});

exports.deletePost = catchAsync(async (req, res, next) => {
  const Post = await Post.findByIdAndDelete(req.params.id);

  if (!Post) {
    return next(new AppError('No Post found with that ID', 404));
  }

  res.status(204).json({
    status: 'success',
    data: null,
  });
});
