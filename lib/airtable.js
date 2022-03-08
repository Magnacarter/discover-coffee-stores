const Airtable = require('airtable');
const base = new Airtable({ apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API }).base(process.env.NEXT_PUBLIC_AIRTABLE_BASE);
const table = base('Table 1');

const getRecord = (record) => {
    return {
        ...record.fields
    }
}

const getRecords = (recordObj) => {
    return recordObj.map((record) => getRecord(record));
}

export { table, getRecords };
