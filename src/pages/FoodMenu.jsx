import React from "react";

const FoodMenu = () => {
    return (
        <div className="bg-[#F1F5F8]  py-10">
            <div className="container w-full mx-auto mt-20 bg-white md:p-20 md:w-3/4">
                <table className="min-w-full">
                    <tbody>
                        <tr className="bg-gray-100 border-b">
                            <td className="px-6 py-4 ">Breakfast</td>
                            <td className="px-6 py-4 ">
                                Toasted Bread + Butter + Jam/Jelly + Sundarban Honey + Boiled
                                Egg + Seasonal Fruits & Tea / Coffee.
                            </td>
                        </tr>
                        <tr className="bg-gray-100 border-b">
                            <td className="px-6 py-4 ">Morning Snacks</td>
                            <td className="px-6 py-4 ">
                                Plain/Fruit Cake + Fresh Fruit/Fruit Juice & Tea / Coffee.
                            </td>
                        </tr>
                        <tr className="bg-gray-100 border-b">
                            <td className="px-6 py-4 ">Lunch</td>
                            <td className="px-6 py-4 ">
                                Plain Rice + Spinach + Mixed Vegetable + Mashed Bean + Chicken
                                Jhal Fry + Prawn Malaicurry + Dal + Salad & Sweet.
                            </td>
                        </tr>
                        <tr className="bg-gray-100 border-b">
                            <td className="px-6 py-4 ">Evening Snacks</td>
                            <td className="px-6 py-4 ">
                                Vegetable Roll / Pitha & Tea / Coffee.
                            </td>
                        </tr>
                        <tr className="bg-gray-100 border-b">
                            <td className="px-6 py-4 ">Dinner</td>
                            <td className="px-6 py-4 ">
                                Plain Rice + Mixed Vegetable + Mashed Tomato + Duck Curry + Fish
                                Dopiaza + Dal + Salad & Sweet.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FoodMenu;
