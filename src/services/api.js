// src/services/api.js

import {
  BriefcaseBusiness,
  CalendarDays,
  List,
  ListCheck,
  Search,
  Store,
} from "lucide-react";


export const Header = [
  {
    id: 1,
    name: "Active Stores",
    value: 9193,
    icon: Store,
  },

  {
    id: 2,
    name: "Stores Offline",
    value: 10,
    icon: BriefcaseBusiness,
  },
  {
    id: 3,
    name: "Rx Tasks",
    value: 9311969,
    icon: List,
  },
  {
    id: 4,
    name: "Total Scheduled",
    value: 1138899,
    icon: CalendarDays,
  },
  {
    id: 5,
    name: "Key Metric 5",
    value: 529,
    icon: ListCheck,
  },
  {
    id: 6,
    name: "Key Metric 6",
    value: 1555000,
    icon: Search,
  },
];

  export const fetchDashboardBodyData = [
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

  export const fetchRxBEData = () => [
    { key: 1, Capability: "Billing Transaction (B1)", SuccessRate: "80", Trend: "green" },
    { key: 2, Capability: "Reversal Transaction (B2)", SuccessRate: "100", Trend: "blue" },
    { key: 3, Capability: "Eligibility Transactions (E1)", SuccessRate: "75", Trend: "green" },
    { key: 4, Capability: "RxConnect Auto Retry", SuccessRate: "25", Trend: "red" },
  ];