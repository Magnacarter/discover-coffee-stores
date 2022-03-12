const Airtable = require('airtable');
const base = new Airtable({ apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API }).base(process.env.NEXT_PUBLIC_AIRTABLE_BASE);
const table = base('Table 1');

const getRecord = (record) => {
    return {
        recordId: record.id,
        ...record.fields
    }
}

const getRecords = (recordObj) => {
    return recordObj.map((record) => getRecord(record));
}

const findRecordByFilter = async (id) => {
    // Find a record.
    const findCoffeeStoreRecords = await table.select({
        filterByFormula: `id="${id}"`
    }).firstPage();

    // It's not the job of the function to qualify the variable
    // that's the api's job. This function's job is to retrieve a record.
    // Map (in getRecords) will return an empty array for us if nothing is found.
    // if (findCoffeeStoreRecords.length !== 0) {
    //     const record = getRecords(findCoffeeStoreRecords);
    //     return record;
    // }

    const record = getRecords(findCoffeeStoreRecords);
    return record;

    // Good practice to return a default if nothing else is returned.
    //return [];
}

export { table, getRecords, findRecordByFilter };
