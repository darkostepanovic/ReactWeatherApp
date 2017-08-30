var React = require('react');

var About = (props) => {
    return (
        <div>
            <h1 className="text-center">About</h1>
            <p>This is a weather application built on React. I have build this as a part of React course on Udemy</p>
            <p>Here are some tools I used:</p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react">React</a> - This was JS framework/library used.
                </li>
                <li>
                    <a href="http://openweathermap.org">Open Weather Map</a> - I used Open Weather Map API to search weather data by city name.
                </li>
            </ul>
        </div>
    )
};

module.exports = About;
