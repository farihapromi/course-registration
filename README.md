# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

#project Feature
1.In this project we have handled a button .By clicking these button we can select courses
2.This project will count the total credit hour and show a toast message if the credits are greater than 20 hour
3.The selected course will not shown more than one time.

#State manage
1.I have declared one state array for courses,as the there will be multile courses that's why we have take an empty array in useState function.I have stored the selected course names in this array
2.For credit and price I have declared an useState function which default value is 0 as it will contain a number.The selected course's Credit will store in this setPrice and setCredit function.
