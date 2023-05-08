// supplierCode:productNumber-size
const partCode1 = "ABC:2468-M";

const part1 = parsePartCode(partCode1);
console.log('part code', part1);

function parsePartCode(partcode) {
    
    const colonPos = partcode.indexOf(':');
    const dashPos = partcode.indexOf('-');
    const supplierCode = partcode.substring(0, colonPos);
    const productNumber = partcode.substring(colonPos + 1, dashPos);
    const size = partcode.substring(dashPos + 1)

    return {
        supplierCode: supplierCode,
        productNumber: productNumber,
        size: size
    }
    // console.log()
}
