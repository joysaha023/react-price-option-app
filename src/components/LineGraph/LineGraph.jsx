import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const LineGraph = () => {

    const studentsMarks = [
        {
          "id": 1,
          "name": "John Doe",
          "physics": 85,
          "math": 78,
          "english": 90
        },
        {
          "id": 2,
          "name": "Jane Smith",
          "physics": 32,
          "math": 88,
          "english": 94
        },
        {
          "id": 3,
          "name": "Alice Johnson",
          "physics": 78,
          "math": 85,
          "english": 28
        },
        {
          "id": 4,
          "name": "Bob Brown",
          "physics": 90,
          "math": 56,
          "english": 88
        },
        {
          "id": 5,
          "name": "Emily Davis",
          "physics": 83,
          "math": 79,
          "english": 85
        }
      ]
      


    return (
        <div className='mt-20 '>
            {/* <ResponsiveContainer width="100%" height="100%"> */}
            <LineChart width={500} height={400} data={studentsMarks}>
            <XAxis dataKey={'name'}></XAxis>    
            <YAxis></YAxis>
                <Line dataKey="math" stroke='red'></Line>
                <Line dataKey="english" stroke='blue'></Line>
                <Line dataKey="physics" stroke='green'></Line>
            </LineChart>
            {/* </ResponsiveContainer> */}
        </div>
    );
};

export default LineGraph;