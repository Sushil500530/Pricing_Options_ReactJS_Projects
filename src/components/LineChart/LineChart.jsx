

import { LineChart as LChart, Line, Tooltip, XAxis,YAxis } from 'recharts';
const LineChart = () => {
    const markMarksChart = [
        {"id": 1,"student": "Sushil","mathMarks": 85,"physicsMarks": 78,"chemistryMarks": 92},
        {"id": 2,"student": "Proshanta","mathMarks": 92,"physicsMarks": 88,"chemistryMarks": 90},
        {"id": 3,"student": "Shamim ","mathMarks": 78,"physicsMarks": 72,"chemistryMarks": 84},
        {"id": 4,"student": "Shiuly","mathMarks": 88,"physicsMarks": 82,"chemistryMarks": 89},
        {"id": 5,"student": "Borsa","mathMarks": 95,"physicsMarks": 90,"chemistryMarks": 94},
        {"id": 6,"student": "Srabnon","mathMarks": 72,"physicsMarks": 68,"chemistryMarks": 76},
        {"id": 7,"student": "Asraful","mathMarks": 90,"physicsMarks": 86,"chemistryMarks": 88},
        {"id": 8,"student": "Mahin","mathMarks": 84,"physicsMarks": 80,"chemistryMarks": 82},
        {"id": 9,"student": "Raton","mathMarks": 79,"physicsMarks": 74,"chemistryMarks": 78},
        {"id": 10,"student": "Abhisekh","mathMarks": 87,"physicsMarks": 84,"chemistryMarks": 86}
      ];
      
    return (
        <div>
            <LChart width={850} height={400} data={markMarksChart}>
            <XAxis dataKey='student' />
            <YAxis />
                <Line dataKey="mathMarks" />
                <Line dataKey="chemistryMarks" stroke='blue' />
                <Line dataKey="physicsMarks" stroke='red' />
                <Tooltip></Tooltip>
                
            </LChart>
        </div>
    );
};

export default LineChart;

[

  ];
  