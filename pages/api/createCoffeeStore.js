import { table, getRecords, findRecordByFilter } from '../../lib/airtable';

const createCoffeeStore = async (req, res) => {
    if (req.method === 'POST') {
        const { id, name, address, dma, voting, imgUrl } = req.body;

        try {
            if (id) {
                // Find a record.
                const records = await findRecordByFilter(id);
                if (records.length !== 0) {
                    res.json(records);
                } else {
                    // Create a record.
                    if (name) {
                        const createRecords = await table.create([
                            {
                                fields: {
                                    id,
                                    name,
                                    address,
                                    dma,
                                    voting,
                                    imgUrl
                                }
                            }
                        ]);
                        const records = getRecords(createRecords);
                        res.json({ records });
                    } else {
                        // The server cannot or will not process the request due to an apparent client error 
                        // (e.g., malformed request syntax, size too large, invalid request message framing, or deceptive request routing)
                        res.status(400);
                        res.json({ message: 'Id or name is missing.' });
                    }
                }
            } else {
                res.status(400);
                res.json({ message: 'Id is missing.' });
            }
        } catch (err) {
            console.error('Error Creating or Finding Store', err);
            res.status(500);
            res.json({ message: "Error Creating or Finding Store", err });
        }
    }
}

export default createCoffeeStore;
