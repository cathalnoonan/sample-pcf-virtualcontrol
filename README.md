# Sample PCF Virtual Control

This is a reference repository, rather than a control that will add value to D365

The general purpose of the repo is to:
- Initialize a PCF control & solution
- Add the code to create a Standard Control that uses React
- Convert the control to a Virtual control

---

The main difference between Standard Controls and Virtual Controls is that in a virtual control, the `updateView` method returns the response of `React.createElement` instead of `void`

---

The resulting build size is much smaller:
- The managed solution containing the Standard Control is 42KB in size 
- The managed solution containing the Virtual Control is 4KB in size

The solution containing the builds of the control are checked into the repo, inside the `output` folder
- TextControl_0_0_1_managed.zip contains the Standard Control
- TextControl_0_0_2_managed.zip contains the Virtual Control
