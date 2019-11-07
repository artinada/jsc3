const BaseService = require('./base-service')
const LibraryModel = require('../models/library')

class LibraryService extends BaseService {
    constructor() {
        super(LibraryModel, `${__dirname}/../library-database.json`)
    }
}

module.exports = new LibraryService()