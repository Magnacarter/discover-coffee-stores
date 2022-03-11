import { table, getRecords, findRecordByFilter } from '../../lib/airtable'

const getCoffeeStoreById = async (req, res) => {
    const { id } = req.query;
    try {
        if (id) {
            // Find a record.
            const record = await findRecordByFilter(id);

            if (record.length !== 0) {
                res.json(record);
            } else {
                res.status(400);
                res.json({ message: 'ID could not be found.' });
            }
        }
    } catch (err) {
        res.status(500);
        console.error({ message: 'Something went wrong.', err });
    }
}

export default getCoffeeStoreById;
