import React from 'react';

const Contact = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      <form className="mx-auto p-4 border rounded shadow-lg" style={{ maxWidth: '600px' }}>
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">Full Name</label>
          <input type="text" className="form-control" id="fullName" placeholder="Enter your Full Name" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter your E mail" />
        </div>   
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea className="form-control" id="message" rows="4" placeholder="Your message"></textarea>
        </div>
        <div className="mb-3 form-check d-flex align-items-center">
          <input type="checkbox" className="form-check-input me-2" id="subscribe" />
          <label className="form-check-label" htmlFor="subscribe">Check me out</label>
        </div>
        <button type="submit" onClick={() => alert('Thank you! Visit again')} className="btn btn-primary w-100">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
