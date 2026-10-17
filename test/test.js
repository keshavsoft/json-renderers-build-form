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

// Test 3: Inline Form
console.log("\n3. Testing 'inline' Form flavour...");
const formSpec3 = render({
    type: "inline",
    columns: columns1,
    data: data1
});
console.log("Inline Form Spec children count:", formSpec3.children.length);
if (formSpec3.tagName !== "form" || formSpec3.children.length !== 6) {
    throw new Error("Test 3 Failed: Expected inline form with 6 children");
}
console.log("Test 3 Passed!");

// Test 4: Form withButtons
console.log("\n4. Testing 'withButtons' Form flavour...");
const formSpec4 = render({
    type: "withButtons",
    columns: columns1,
    data: data1,
    options: {
        submitLabel: "Save All",
        cancelLabel: "Discard"
    }
});
const lastChild = formSpec4.children[formSpec4.children.length - 1];
console.log("Last child (button bar):", lastChild);
if (!lastChild || lastChild.tagName !== "div" || lastChild.children?.length !== 2) {
    throw new Error("Test 4 Failed: Expected button bar with 2 buttons");
}
if (lastChild.children[0].textContent !== "Save All" || lastChild.children[1].textContent !== "Discard") {
    throw new Error("Test 4 Failed: Expected button text 'Save All' and 'Discard'");
}
console.log("Test 4 Passed!");

console.log("\n All json-renderers-build-form tests (stacked, inline, withButtons) PASSED successfully!");

