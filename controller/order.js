class OrderController {
  getOrder(req, res, next) {
    res.json({ type: 'order', content: 'lorem ipsum' });
  }
  createOrder(req, res, next) {
    res.status(201).json('order created');
  }
  deleteOrder(req, res, next) {
    res.json('order deleted');
  }
}

module.exports = new OrderController();
