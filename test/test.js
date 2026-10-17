import render, { renderForm } from "../src/index.js";

console.log("--- Testing json-renderers-build-form ---");

// Test 1: Simple Vertical Form
console.log("\n1. Testing Vertical Form with various fields...");
const columns1 = [
    { columnName: "Name", type: "text", label: "Full Name", placeholder: "Ada Lovelace", required: true },
    { columnName: "Email", type: "email", label: "Email Address", placeholder: "ada@example.com" },
    { columnName: "Role", type: "select", label: "Role", options: ["Designer", "Engineer", "PM"] },
    { columnName: "Notes", type: "textarea", label: "Notes", rows: 4 },
    { columnName: "Agreed", type: "checkbox", label: "I agree to the terms" }
];

const data1 = [
    { Name: "Ada Lovelace", Email: "ada@example.com", Role: "Engineer", Notes: "Hello world", Agreed: true }
];

const formSpec1 = render({
    columns: columns1,
    data: data1,
    options: {
        formId: "contact-form",
        submitLabel: "Send Message"
    }
});

console.log("Form Spec:", JSON.stringify(formSpec1, null, 2));

if (formSpec1.tagName !== "form") {
    throw new Error("Test 1 Failed: Expected form root element");
}
if (formSpec1.attributes.id !== "contact-form") {
    throw new Error("Test 1 Failed: Expected id 'contact-form'");
}
// 5 fields + 1 submit button = 6 children
if (formSpec1.children.length !== 6) {
    throw new Error(`Test 1 Failed: Expected 6 children, got ${formSpec1.children.length}`);
}
console.log("Test 1 Passed!");

// Test 2: Field with action button (using input-row's inputWithLabelButton)
console.log("\n2. Testing Form with field action button...");
const columns2 = [
    {
        columnName: "Coupon",
        type: "text",
        label: "Discount Code",
        placeholder: "SAVE20",
        buttonText: "Apply",
        buttonClass: "btn btn-success"
    }
];

const formSpec2 = render({
    columns: columns2,
    options: {
        showSubmit: false
    }
});

console.log("Form Spec with button:", JSON.stringify(formSpec2, null, 2));

const couponRow = formSpec2.children[0];
if (!couponRow || couponRow.children?.length !== 3) {
    throw new Error("Test 2 Failed: Expected coupon row with label, input, and button");
}
if (couponRow.children[2].textContent !== "Apply") {
    throw new Error("Test 2 Failed: Expected button text 'Apply'");
}
console.log("Test 2 Passed!");

console.log("\n All json-renderers-build-form tests PASSED successfully!");
