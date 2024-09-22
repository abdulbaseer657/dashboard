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
  { name: "RxC", status: "green", disabled: true },
  { name: "TPMS", status: "green", disabled: true },
  { name: "Intake", status: "green", disabled: true },
  { name: "CiQ", status: "yellow", disabled: false },
  { name: "RxBE", status: "red", disabled: true },
  { name: "RPHAl", status: "green", disabled: false },
  { name: "PCC", status: "green", disabled: false },
  { name: "ERE", status: "green", disabled: true },
  { name: "RxGE", status: "green", disabled: true },
  { name: "RxCIE", status: "green", disabled: true },
];

export const fetchRxBEData = () => [
  {
    key: 1,
    Capability: "Billing Transaction (B1)",
    YTD: 99.99,
    Last24hrs: 99.97,
    CurrentTrend: 99.99,
    Trend: "green",
    GraphData: [99.9, 99.91, 99.93, 99.95, 99.96, 99.97, 99.98, 99.99],
  },
  {
    key: 2,
    Capability: "Reversal Transaction (B2)",
    YTD: 99.98,
    Last24hrs: 99.99,
    CurrentTrend: 99.99,
    Trend: "blue",
    GraphData: [99.95, 99.97, 99.98, 99.99, 99.97, 99.96, 99.99, 99.99],
  },
  {
    key: 3,
    Capability: "Eligibility Transactions (E1)",
    YTD: 99.88,
    Last24hrs: 99.99,
    CurrentTrend: 99.99,
    Trend: "red",
    GraphData: [99.8, 99.82, 99.85, 99.88, 99.9, 90.92, 89.94, 79.99],
  },
  {
    key: 4,
    Capability: "RxConnect Auto Retry",
    YTD: 97.98,
    Last24hrs: 99.99,
    CurrentTrend: 99.99,
    Trend: "red",
    GraphData: [97.5, 98.0, 97.8, 98.5, 99.0, 99.5, 30.0, 10.0],
  },
];
