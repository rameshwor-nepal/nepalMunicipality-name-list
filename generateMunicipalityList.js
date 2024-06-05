const fs = require('fs');

const data = JSON.parse(fs.readFileSync('nepal_location.json', 'utf8'));
console.log(data)

const municipalityList = [];

data?.provinceList?.forEach(province => {
    const provinceName = province.name;
    province.districtList.forEach(district => {
        const districtName = district.name;
        district.municipalityList.forEach(municipality => {
            const municipalityName = municipality.name;
            municipalityList.push({
                district: districtName,
                province: provinceName,
                municipality: municipalityName
            });
        });
    });
});

const jsExport = "export const MunicipalityList = " + JSON.stringify(municipalityList, null, 4) + ";";

fs.writeFileSync('MunicipalityList.js', jsExport);

console.log('MunicipalityList.js file has been saved.');
