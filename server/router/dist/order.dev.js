"use strict";

var express = require('express');

var router = express.Router();

var mongo = require('../utils/mongo'); // const {formatData} = require('../utils/tools')
// get /api/goods 查询所有商品


router.get('/', function _callee(req, res) {
  var _req$query, _req$query$page, page, _req$query$size, size, skip, limit, result;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$query = req.query, _req$query$page = _req$query.page, page = _req$query$page === void 0 ? 1 : _req$query$page, _req$query$size = _req$query.size, size = _req$query$size === void 0 ? 10 : _req$query$size;
          skip = (page - 1) * size; //0

          limit = size * 1; //10
          // 处理排序参数
          // sort = sort.split(',');// ['price'],['price','-1']
          // 查询所有商品

          _context.next = 5;
          return regeneratorRuntime.awrap(mongo.find('order', {}, {
            skip: skip,
            limit: limit
          }));

        case 5:
          result = _context.sent;
          res.send({
            data: result
          });

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
});
router["delete"]('/:id', function _callee2(req, res) {
  var id, result;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          id = req.params.id; //    console.log(id)

          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(mongo.remove('order', {
            _id: id
          }));

        case 4:
          result = _context2.sent;
          res.send("success");
          _context2.next = 11;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](1);
          res.send("fail");

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 8]]);
});
module.exports = router;