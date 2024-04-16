const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("PDMModule", (m) => {
  const pdm = m.contract("PDM");
  return { pdm };
});
