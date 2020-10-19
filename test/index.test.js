const { expect } = require('chai');
const chai = require('chai');
const assertArrays = require('chai-arrays');
chai.use(assertArrays);
const PortalConfig = require('../iform-portal-config')

let config;

const test_group_id = "[jest]:[client]:1"


beforeAll(() => {
    config = new PortalConfig();
});

test("Get all", async() =>{
    let data = await config.getConfig();
    expect(data).to.be.array();
})

test("Set config", async() =>{
    let data = await config.setConfig("key1","value1",test_group_id)
    expect(data.id).to.be.a('number')
    record_id = data.id;
})

test("Get by key", async() => {
    const config_key = "key1"
    let data = await config.getConfig(config_key);
    expect(data).to.be.array();
    data.forEach( o =>{
        expect(o.config_key).to.be.eq(config_key)
    })
})

test("Get by key and group", async() => {
    const config_key = "key1"
    let data = await config.getConfig(config_key, test_group_id);
    expect(data).to.be.array();
    data.forEach( o =>{
        expect(o.config_key).to.be.eq(config_key)
        expect(o.config_group).to.be.eq(test_group_id)

    })
})
let record_id;

test("Update config", async() =>{
    let data = await config.setConfig("key2","value2",test_group_id, record_id)
    expect(data.id).to.be.a('number')
    record_id = data.id;
})

test("Delete config", async() =>{
    let data = await config.removeConfig(record_id)
    expect(data.id).to.be.a('number')
    record_id = data.id;
})