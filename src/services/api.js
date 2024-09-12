// src/services/api.js
export const fetchDashboardHeaderData = () => {
  return {
    activeStores: 9193,
    storesOffline: 10,
    rxTasks: 9311969,
    totalScheduledFill: 1138899,
    keyMetric5: 529,
    keyMetric6: 1555000,
  };
};

export const fetchDashboardBodyData = () => {
  return [
    { name: "RxC", status: "green" },
    { name: "TPMS", status: "green" },
    { name: "Intake", status: "green" },
    { name: "CiQ", status: "yellow" },
    { name: "RxBE", status: "red" },
    { name: "RPHAl", status: "green" },
    { name: "PCC", status: "green" },
    { name: "ERE", status: "green" },
    { name: "RxGE", status: "green" },
    { name: "RxCIE", status: "green" },
  ];
};
export const fetchRxBEData = () => {
  return [
    { Capability: "Billing Transaction(B1)", SucessRate: "80", Trend: "green" },
    {
      Capability: "Reversal Transaction (B2)",
      SucessRate: "100",
      Trend: "blue",
    },
    {
      Capability: "Eligibility Transaction(E1)",
      SucessRate: "75",
      Trend: "green",
    },
    { Capability: "RxConnect Auto retry", SucessRate: "25", Trend: "red" },
  ];
};
