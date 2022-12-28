const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("a simple get request made");
});

app.get("/abc", (req, res) => {
  res.send("hey I am ABC");
});

app.post("/pqr", (req, res) => {
  res.send("hey I am PQR");
});

app.post("/xyz", (req, res) => {
  const resHere = {
    message: "List of orders",
    data: [
      {
        orderId: "SO-2201271113180305",
        orderStatus: "confirmed",
        orderType: "SPLIT_PARENT",
        orderValue: 100000,
        isBooksOpted: true,
        countSHO_SSO: 1,
        paymentDetails: {
          amountPaid: 100000,
          amountRemaining: 0,
          totalAmount: 100000,
          payments: [
            {
              amount: 100000,
              paymentMode: "non_emi",
              orderId: "SSO1-2201271113180305",
              programName: "BYJUS Learning Center",
            },
          ],
        },
        productDetails: [
          { name: "4th Grade SD Card - Byju's Math May 2022" },
          { name: "5th Grade SD Card - Byju's Math May 2023" },
          { name: "6th CBSE (SD Card-Byjus) May-2022" },
          { name: "7th CBSE (SD Card-Byjus) May-2023" },
          { name: "8th CBSE (SD Card-Byjus) May-2024" },
          {
            name: "4th Grade Hybrid Tuition Program at BYJU'S Learning Centre May 2022",
          },
          {
            name: "5th Grade Hybrid Tuition Program at BYJU'S Learning Centre May 2023",
          },
        ],
        programDetails: [
          {
            programId: "BCRPUCSY0001",
            programName: "BYJUS Learning Center",
            programStatus: "Active",
            programType: "New",
            startAt: "2022-01-27",
            endAt: "2024-05-31",
            subOrderId: "SSO1-2201271113180305",
          },
        ],
        estimatedDispatchDate: "NA",
        subOrders: [
          {
            subOrderId: "SSO1-2201271113180305",
            productDetails: [
              { name: "4th Grade SD Card - Byju's Math May 2022" },
              { name: "5th Grade SD Card - Byju's Math May 2023" },
              { name: "6th CBSE (SD Card-Byjus) May-2022" },
              { name: "7th CBSE (SD Card-Byjus) May-2023" },
              { name: "8th CBSE (SD Card-Byjus) May-2024" },
            ],
            orderStatus: "confirmed",
            productSelectionType: "byjus_learning_centre",
          },
          {
            subOrderId: "SSO2-2201271113180305",
            productDetails: [
              {
                name: "4th Grade Hybrid Tuition Program at BYJU'S Learning Centre May 2022",
              },
              {
                name: "5th Grade Hybrid Tuition Program at BYJU'S Learning Centre May 2023",
              },
            ],
            orderStatus: "confirmed",
          },
        ],
        shipments: [
          {
            shipmentOrderId: "SHO1-undefined",
            orderStatus: "confirmed",
            orderType: "product",
            isBooksOpted: true,
            billingAddress: {
              addressLine1: "L-88 sector-12",
              addressLine2: "sector-12",
              addressLine3:
                "L-88 sector-12 Noida 201301 near by ESI dispensary",
              country: "India",
              zipcode: "201301",
              state: "Uttar Pradesh (UP)",
              city: "Gautam Buddha Nagar",
              address:
                "L-88 sector-12\n sector-12\n L-88 sector-12 Noida 201301 near by ESI dispensary",
            },
            shippingAddress: {
              addressLine1: "L-88 sector-12",
              addressLine2: "sector-12",
              addressLine3:
                "L-88 sector-12 Noida 201301 near by ESI dispensary",
              country: "India",
              zipcode: "201301",
              state: "Uttar Pradesh (UP)",
              city: "Gautam Buddha Nagar",
              address:
                "L-88 sector-12\n sector-12\n L-88 sector-12 Noida 201301 near by ESI dispensary",
            },
            paymentDetails: { amountPaid: null },
            productDetails: [],
            estimatedDispatchDate: "NA",
            expectedArrivalDate: "NA",
            trackingLink: "",
          },
        ],
      },
    ],
  };
  res.send(resHere);
});

module.exports = app;
