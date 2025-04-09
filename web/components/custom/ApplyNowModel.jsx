"use client";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";


// Modal.setAppElement("#root");

const ApplyNowModel = ({  closeModal, isOpen }) => {

  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    qualification: "",
    phone: "",
    state: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)

    const formBody = new FormData();
    formBody.append("name", formData.name);
    formBody.append("qualification", formData.qualification);
    formBody.append("phone", formData.phone);
    formBody.append("state", formData.state);
    formBody.append("action", "addItem");
  
    const googleFormUrl =
      "https://script.google.com/macros/s/AKfycbw7UG20Zb_nuSPmDt_qA0zmdWonGJ7HxVojlGdBiiSTXqz08ojn-kM5mobSsZ7_VxJL3w/exec";
  
    try {
      const response = await fetch(googleFormUrl, {
        method: "POST",
        body: formBody,
      });
  
      if (response.ok) {
        toast.success("Form submitted successfully!");
        closeModal()
        setFormData({
          name: "",
          qualification: "",
          phone: "",
          state: "",
        });
      } else {
        toast.error("Failed to submit the form. Please try again.");
      }
    } catch (error) {
      console.log("error", error);
      toast.error("An error occurred while submitting the form.");
    } finally {
      setLoading(false)
    }
  };


  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  


    
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        className="bg-white p-6 relative rounded-xl w-[90%] md:w-[450px] mx-auto mt-20 shadow-lg z-50"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      >
        <div className="absolute top-[-19px] right-[-10px] shadow-md bg-white w-[40px] h-[40px] rounded-full flex justify-center items-center">
          <button
            onClick={closeModal}
            className=" text-gray-600 hover:text-black"
          >
            ✖
          </button>
        </div>

        <div>
         <div className=" mb-4 ">
          <h2 className=" text-center items-center text-[28px] font-semibold  text-primary">Apply Now</h2>
         </div>
        <div className="px-7 py-1 pb-8">
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <Input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <Input
                  type="text"
                  name="qualification"
                  placeholder="Qualification"
                  value={formData.qualification}
                  onChange={handleInputChange}
                />
                <Input
                  type="number"
                  name="phone"
                  min={0}
                  required
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
      
                <Select onValueChange={(value) => handleSelectChange("state", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select State" />
                  </SelectTrigger>
                  <SelectContent className=" bg-white">
                    <SelectGroup>
                      <SelectLabel>State</SelectLabel>
                      <SelectItem value="andhra-pradesh">Andhra Pradesh</SelectItem>
                      <SelectItem value="assam">Assam</SelectItem>
                      <SelectItem value="bihar">Bihar</SelectItem>
                      <SelectItem value="chhattisgarh">Chhattisgarh</SelectItem>
                      <SelectItem value="goa">Goa</SelectItem>
                      <SelectItem value="gujarat">Gujarat</SelectItem>
                      <SelectItem value="haryana">Haryana</SelectItem>
                      <SelectItem value="himachal-pradesh">
                        Himachal Pradesh
                      </SelectItem>
                      <SelectItem value="jharkhand">Jharkhand</SelectItem>
                      <SelectItem value="karnataka">Karnataka</SelectItem>
                      <SelectItem value="kerala">Kerala</SelectItem>
                      <SelectItem value="madhya-pradesh">Madhya Pradesh</SelectItem>
                      <SelectItem value="maharashtra">Maharashtra</SelectItem>
                      <SelectItem value="manipur">Manipur</SelectItem>
                      <SelectItem value="meghalaya">Meghalaya</SelectItem>
                      <SelectItem value="mizoram">Mizoram</SelectItem>
                      <SelectItem value="nagaland">Nagaland</SelectItem>
                      <SelectItem value="odisha">Odisha</SelectItem>
                      <SelectItem value="punjab">Punjab</SelectItem>
                      <SelectItem value="rajasthan">Rajasthan</SelectItem>
                      <SelectItem value="sikkim">Sikkim</SelectItem>
                      <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
                      <SelectItem value="telangana">Telangana</SelectItem>
                      <SelectItem value="tripura">Tripura</SelectItem>
                      <SelectItem value="uttar-pradesh">Uttar Pradesh</SelectItem>
                      <SelectItem value="uttarakhand">Uttarakhand</SelectItem>
                      <SelectItem value="west-bengal">West Bengal</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Button
                  type="submit"
                  className="flex mt-4 items-center border border-primary text-white px-4 py-2 rounded bg-primary hover:bg-transparent hover:text-primary hover:border-primary transition-colors"
                  disabled={loading}
                >
                 {loading ? 'Submitting...' : 'Submit'}
                </Button>
              </form>
      </div>
        </div>
      </Modal>
    </div>
  );
};

export default ApplyNowModel;
