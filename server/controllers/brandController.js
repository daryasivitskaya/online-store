const {Brand} = require('../models/models');
const ApiError = require('../error/ApiError')

class BrandController {
    async create(req, res, next) {
        try {
            const { name } = req.body;
            if (!name) {
                return next(ApiError.badRequest("Name field is required"));
            }

            const brand = await Brand.create({ name });
            return res.json(brand);
        } catch (error) {
            return next(ApiError.internal("Error occurred while creating brand"));
        }
    }

    async getAll(req, res, next) {
        try {
            const brands = await Brand.findAll();
            return res.json(brands);
        } catch (error) {
            return next(ApiError.internal("Error occurred while fetching brands"));
        }
    }

    async delete(req, res, next) {
        try {
            const { id } = req.params;
            if (!id) {
                return next(ApiError.badRequest("ID parameter is required"));
            }

            const deleted = await Brand.destroy({ where: { id } });
            if (!deleted) {
                return next(ApiError.badRequest(`Brand with ID ${id} not found`));
            }

            return res.json({ message: `Brand with ID ${id} deleted successfully` });
        } catch (error) {
            return next(ApiError.internal("Error occurred while deleting brand"));
        }
    }
}

module.exports = new BrandController();