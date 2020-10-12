function paginate(model, page, limit) {
  if (typeof model === "function") {
    return async (req, res, next) => {
      const page = req.query.page
        ? parseInt(req.query.page)
        : (req.query.page = 1);
      const limit = req.query.limit
        ? parseInt(req.query.limit)
        : (req.query.limit = 3);
      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;

      const result = {};

      if (endIndex < (await model.countDocuments().exec())) {
        result.next = {
          page: page + 1,
          limit: limit,
        };
      }
      if (startIndex > 0) {
        result.previous = {
          page: page - 1,
          limit: limit,
        };
      }
      try {
        result.results = await model.find().limit(limit).skip(startIndex);
        res.paginatedResult = result;
        next();
      } catch (e) {
        res.status(500).json({ message: e.message });
      }
    };
  } else if (Array.isArray(model)) {
    page = page ? parseInt(page) : (page = 1);
    limit = limit ? parseInt(limit) : (limit = 3);
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const result = {};

    if (endIndex < model.length) {
      result.next = {
        page: page + 1,
        limit: limit,
      };
    }
    if (startIndex > 0) {
      result.previous = {
        page: page - 1,
        limit: limit,
      };
    }
    result.results = model.slice(startIndex, endIndex);
    return result;
  } else {
    if (!Array.isArray(model) || typeof model === "function") {
      return {
        Error: `Expected array or mongoose model  but got ${typeof model}`,
      };
    }
  }
}
module.exports = paginate
