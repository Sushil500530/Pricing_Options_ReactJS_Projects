import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

  const priceOptions =  [
        {
          "id": "1",
          "name": "Basic Membership",
          "price": 29.99,
          "features": [
            "Access to gym facilities",
            "Cardio and strength equipment",
            "Locker room access",
            "Free weights",
            "Personal trainer available for hire",
            "Monthly fitness assessment",
            "Access to online workout videos"
          ]
        },
        {
          "id": "2",
          "name": "Premium Membership",
          "price": 49.99,
          "features": [
            "All Basic Membership features",
            "Group fitness classes",
            "Sauna and steam room access",
            "Nutritional counseling",
            "Discounts on merchandise",
            "Unlimited guest passes",
            "Priority booking for classes"
          ]
        },
        {
          "id": "3",
          "name": "Family Membership",
          "price": 79.99,
          "features": [
            "All Premium Membership features",
            "Access for spouse and children",
            "Childcare services",
            "Family fitness classes",
            "Special family events",
            "Family nutrition planning",
            "Exclusive family workout sessions"
          ]
        }
      ];
      
    return (
        <div>
            <h2 className="text-5xl text-center my-10">Best Prices in the town</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-5">
           {
                priceOptions.map(option => <PriceOption key={option.id} option={option} />)
            }
           </div>
        </div>
    );
};

export default PriceOptions;