import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/inputBox';
import dataArray from '../mock/info';


export default function Form() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        Location: '',
        Title:"",
        'Map-link': '',
        'Check-in': '',
        'Check-out': '',
        Description: '',
        Image: null
    });

    function handleChange(e) {
        const { type, name, value, files } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'file' ? files[0] : value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        // Create a URL for the uploaded image file
        const imageUrl = formData.Image ? URL.createObjectURL(formData.Image) : "";

        dataArray.push({
            Location: formData.Location,
            Title: formData.Title,
            MapLink: formData['Map-link'], // fix key to match formData
            CheckIn: formData['Check-in'],
            CheckOut: formData['Check-out'],
            Description: formData.Description,
            Image: imageUrl // Store the image URL
        });

        navigate('/');
    }

    return (
        <section className="form-section">
            <h1>Enter Your Experience:</h1>
            <form className="form" onSubmit={handleSubmit}>
                <Input for="Location" enter="Enter Location Name :" type="text"
                    value={formData.Location} onChange={handleChange} name="Location" />
                <Input for="Title" enter="Enter Title :" type="text"
                    value={formData.Title} onChange={handleChange} name="Title" />
                <Input for="Map-link" enter="Enter Google Map Link : " type="text"
                    value={formData['Map-link']} onChange={handleChange} name="Map-link" />
                <Input for="Check-in" enter="Enter Check-In Date : " type="text"
                    value={formData['Check-in']} onChange={handleChange} name="Check-in" />
                <Input for="Check-out" enter="Enter Check-Out Date : " type="text"
                    value={formData['Check-out']} onChange={handleChange} name="Check-out" />
                <Input for="Description" enter="Enter Description : " type="text"
                    value={formData.Description} onChange={handleChange} name="Description" />
                <Input for="Image" enter="Upload an Image : " type="file"
                    onChange={handleChange} name="Image" />
                <input type="submit" className="submit-data"/>
            </form>
        </section>
    )
}