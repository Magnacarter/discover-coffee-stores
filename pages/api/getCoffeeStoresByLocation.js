import { fetchCoffeeStores } from "../../lib/coffee-stores";

const getCoffeeStoresByLocation = async (req, res) => {
    try {
        const { latlong, limit } = req.query;
        const response = await fetchCoffeeStores(latlong, limit);
        res.status;
        res.json(response);
    } catch (err) {
        res.status(500);
        res.json({message: 'Uh oh... Something went wrong.', err});
    }
}

export default getCoffeeStoresByLocation;