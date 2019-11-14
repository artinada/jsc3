const BaseService = require('./base-service')
const OrderModel = require('../models/order')

class OrderService extends BaseService {
    constructor() {
        super(OrderModel, `${__dirname}/../order-database.json`)
    }
}

module.exports = new OrderService()