import { table, getRecords, findRecordByFilter } from '../../lib/airtable';

const favCoffeeStoreById = async (req, res) => {
    if (req.method === 'PUT') {
        // Have to destructure id from req.query obj, hence { id }
        const { id } = req.query;
        try {
            if (id) {
                // Find a record.
                const records = await findRecordByFilter(id);

                if (records.length !== 0) {
                    const record = records[0];
                    const calcVoting = parseInt(record.voting) + parseInt(1);

                    // Update the voting count on Airtable db.
                    const updateRecord = await table.update([
                        {
                            id: record.recordId,
                            fields: {
                                voting: calcVoting
                            }
                        }
                    ]);

                    if (updateRecord) {
                        const miniRecords = getRecords(records);
                        res.json(miniRecords);
                    }
                } 
            } else {
                res.status(400);
                res.json({ message: 'ID could not be found.', id });
            }
        } catch (err) {
            res.status(500);
            res.json({ message: 'Could not update your vote.', err });
            console.error({ message: 'Could not update your vote.', err });
        }
    }
}

export default favCoffeeStoreById;
