import React, { useState } from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFDownloadLink,
  Image,
  Line
} from "@react-pdf/renderer";
import { v4 as uuidv4 } from "uuid";

import "./index.css";

const Resume2 = () => {
  const [name, setName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [webUrl, setWebUrl] = useState("");
  const [address, setAddress] = useState("");
  const [colleges, setColleges] = useState([]);
  const [skill, setSkill] = useState("");
  const [skillList, setSkillList] = useState([]);
  const [expertise, setExpertise] = useState("");
  const [expertiseList, setExpertiseList] = useState([]);
  const [profilePic, setProfilePic] = useState(null);
  const [companies, setCompanies] = useState([]);
  const [ProExp, setProExp] = useState("");
  const [reference, setReference] = useState("");
  const [referencesList, setReferencesList] = useState([]);

  const styles = StyleSheet.create({
    page: {
      flexDirection: "row",
      backgroundColor: "white",
      padding: 0,
      width:'100%',
      fontSize: 12
    },

    title: {
      color: "#3D3733",
      fontWeight: 900,
      marginLeft: 20,
      marginTop: 20,
      fontSize: 15,
      marginBottom: 0,
      marginRight: 40
    },
    jobtitle: {
      marginTop: 10,
      marginLeft: 30,
      fontSize: 25,
      marginBottom: 30,
      color: "#9BA4B5"
    },
    subTitle: {
      color: "#3D3733",
      fontWeight: 700,
      marginLeft: 20,
      fontSize: 12,
      marginBottom: 0,
      marginRight: 40
    },
    name: {
      marginTop: 50,
      marginLeft: 30,
      fontSize: 35,
      marginBottom: 30,
      fontWeight: 1000
    },
    leftSection: {
      margin: 0,
      padding: 10,
      backgroundColor: "#FFF8DE",
      width: 250
    },
    rightSection: {
      margin: 0,
      padding: 10,
      backgroundColor: "#F6FFDE"
    },
    heading: {
      fontSize: 18,
      fontWeight: 1000,
      marginBottom: 10
    },
    label: {
      fontWeight: 700,
      marginBottom: 5,
      padding: 5,
      marginLeft: 20,
      color: "#3D3733"
    },
    responseLabel: {
      fontWeight: 700,
      marginBottom: 5,
      marginTop: 5,
      padding: 5,
      marginLeft: 40,
      color: "#3D3733"
    },
    value: {
      marginBottom: 10
    },

    listItem: {
      marginLeft: 45,
      marginBottom: 10
    },

    line: {
      marginTop: 3,
      marginBottom: 10,
      borderBottomWidth: 1,
      borderBottomColor: "#3D3733",
      marginLeft: 20,
      marginRight: 10
    },
    duration: {
      color: "#3D3733",
      fontWeight: 400,
      marginLeft: 20,
      fontSize: 12,
      marginTop: 5,
      marginBottom: 0,
      marginRight: 40
    }
  });

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setProfilePic(reader.result);
    };
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const college = {
      id: uuidv4(),
      name: event.target.collegeName.value,
      studied: event.target.studiedField.value,
      startDate: event.target.startDate.value,
      endDate: event.target.endDate.value,
      grade: event.target.grade.value
    };
    setColleges([...colleges, college]);
    event.target.reset();
  };

  const handleWorkExpSubmit = (event) => {
    event.preventDefault();
    const company = {
      id: uuidv4(),
      companyName: event.target.companyName.value,
      role: event.target.role.value,
      startJobDate: event.target.startJobDate.value,
      endJobDate: event.target.endJobDate.value,
      response: event.target.response.value
    };
    setCompanies([...companies, company]);
    event.target.reset();
  };

  const handleAddSkill = (event) => {
    setSkillList([...skillList, skill.toUpperCase()]);
    setSkill("");
  };

  const handleAddExpertise = (event) => {
    setExpertiseList([...expertiseList, expertise.toUpperCase()]);
    setExpertise("");
  };

  const handleReferences = (event) => {
    setReferencesList([...referencesList, reference]);
    setReference("");
  };

  const generatePDF = () => {
    const MyDocument = () => (
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.leftSection}>
            <Image
              src={profilePic}
              alt="profilepic"
              style={{
                width: 150,
                height: 150,
                borderRadius: 0,
                marginTop: 20,
                alignSelf: "center",
                marginBottom: 20
              }}
            />
            <h1 style={styles.title}>Contact</h1>
            <Text style={styles.label}>
              {" "}
              <Image src="https://cdn-icons-png.flaticon.com/512/483/483947.png" />{" "}
              {contact}
            </Text>
            <Text style={styles.label}>
              {" "}
              <Image src="https://cdn-icons-png.flaticon.com/512/542/542689.png" />{" "}
              {email}
            </Text>
            <Text style={styles.label}>
              {" "}
              <Image src="https://cdn-icons-png.flaticon.com/512/1006/1006771.png" />{" "}
              {webUrl}
            </Text>
            <Text style={styles.label}>
              {" "}
              <Image src="https://cdn-icons-png.flaticon.com/512/25/25694.png" />{" "}
              {address}
            </Text>
            <Text style={styles.title}>SKILLS</Text>
            <Line style={styles.line} />
            <View>
              {skillList.map((item, index) => (
                <Text key={index} style={styles.listItem}>
                  {item}
                </Text>
              ))}
            </View>
            <Text style={styles.title}>EXPERTISE</Text>
            <Line style={styles.line} />
            <View>
              {expertiseList.map((item, index) => (
                <Text key={index} style={styles.listItem}>
                  {item}
                </Text>
              ))}
            </View>
            <Text style={styles.title}>References</Text>
            <Line style={styles.line} />
            <View>
              {referencesList.map((item, index) => (
                <Text key={index} style={styles.listItem}>
                  {item}
                </Text>
              ))}
            </View>
          </View>
          <View style={styles.rightSection}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.jobtitle}>{jobTitle}</Text>
            <Text style={styles.title}>DESCRIPTION</Text>
            <Line style={styles.line} />
            <Text style={styles.label}>{ProExp}</Text>
            <Text style={styles.title}>WORK EXPERIENCE</Text>
            <Line style={styles.line} />
            <View>
              {companies.map((item, index) => (
                <>
                  <Text key={index} style={styles.subTitle}>
                    {item.companyName} | {item.role}
                  </Text>

                  <Text key={index} style={styles.duration}>
                    {item.startJobDate} to {item.endJobDate}
                  </Text>
                  <Text key={index} style={styles.responseLabel}>
                    Responsibilities: {item.response}
                  </Text>
                </>
              ))}
            </View>
            {/* <View>
        {companies.map((item, index) => (
            <Text key={index} style={styles.duration}>
             {item.startJobDate} - {item.endJobDate}
            </Text>
            ))}``
            
            </View> */}
            {/* <View>
        {companies.map((item, index) => (
            <Text key={index} style={styles.responseLabel}>
             {item.response}
            </Text>
            ))}``
            
            </View> */}
            <Text style={styles.title}>EDUCATION</Text>
            <Line style={styles.line} />
            <View>
              {colleges.map((item, index) => (
                <>
                  <Text key={index} style={styles.subTitle}>
                    {item.name}, {item.startDate} to {item.endDate}
                  </Text>
                  <Text key={index} style={styles.responseLabel}>
                    Field of Study: {item.studied}
                  </Text>
                </>
              ))}{" "}
            </View>
            {/* <View>
            {colleges.map((item, index) => (
            <Text key={index} style={styles.subTitle}>
             {item.collegeName} , {item.startDate.getFullYear()}-{item.endDate.getFullYear()}
            </Text>
           ))} </View> */}
            {/* <View>
            {colleges.map((item, index) => (
            <Text key={index} style={styles.responseLabel}>
             {item.studied}
            </Text>
           ))} </View> */}
          </View>
        </Page>
      </Document>
    );

    return (
      <button className="download_btn">
        <PDFDownloadLink
          className="download_link"
          document={<MyDocument />}
          fileName="resume.pdf"
        >
          {({ blob, url, loading, error }) => "Download PDF"}
        </PDFDownloadLink>
      </button>
    );
  };

  return (
    <>
      <div className="bg-container">
        <div className="form-container">
          <h1 className="main-img-tag">
            Get Your Customized Resume PDF: Fill Out the Form Below
          </h1>

          <label className="input-label">
            Profile Picture:
            <input
              type="file"
              name="profilePic"
              accept="image/*"
              onChange={handleFileInputChange}
            />
          </label>
        <div className="entire-details">

          <div className="basic-details">
          <h1 className="main-img-tag">Basic Info</h1>
          <label style={{marginTop:'-22px'}} className="input-label" htmlFor="username">
            Name:
          </label>
          <input
            id="username"
            className="username-input-field"
            value={name}
            placeholder="Name"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
          <label style={{marginTop:'-22px'}} className="input-label" htmlFor="job-title">
            Job Title:
          </label>
          <input
            id="job-title"
            className="username-input-field"
            value={jobTitle}
            placeholder="Job Title"
            type="text"
            onChange={(e) => setJobTitle(e.target.value)}
          />
          <label style={{marginTop:'-22px'}} className="input-label" htmlFor="email">
            Email:
          </label>
          <input
            id="email"
            className="username-input-field"
            value={email}
            placeholder="Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label style={{marginTop:'-22px'}} className="input-label" htmlFor="contact">
            Contact No:
          </label>
          <input
            id="contact"
            className="username-input-field"
            value={contact}
            placeholder="Contact Number"
            type="tel"
            onChange={(e) => setContact(e.target.value)}
          />

          <label style={{marginTop:'-22px'}} className="input-label" htmlFor="web">
            Web Url:
          </label>
          <input
            id="web"
            className="username-input-field"
            value={webUrl}
            placeholder="Web URL"
            type="tel"
            onChange={(e) => setWebUrl(e.target.value)}
          />

          <label style={{marginTop:'-22px'}} className="input-label" htmlFor="address">
            Address
          </label>
          <textarea
            id="address"
            className="username-input-field"
            value={address}
            placeholder="Address"
            type="textarea"
            onChange={(e) => setAddress(e.target.value)}
            min-height="100px"
          />
          </div>

          <div className="education-section">
            <h1 className="main-img-tag">Education </h1>
            <form onSubmit={handleSubmit}>
              <label className="input-label" htmlFor="collegename">
                College / School Name:
              </label>
              <br></br>
              <input
                type="text"
                name="collegeName"
                required
                className="username-input-field"
                placeholder="College Name"
              />
              <br />
              <label className="input-label">Studied Field:</label>
              <br />
              <input
                type="text"
                name="studiedField"
                required
                className="username-input-field"
                placeholder="Studied"
              />
              <br />
              <label className="input-label">Start Date: </label>
              <br />
              <input
                type="date"
                name="startDate"
                required
                className="username-input-field"
                placeholder="Start Date "
              />
              <br />
              <label className="input-label">End Date: </label> <br />
              <input
                type="date"
                name="endDate"
                required
                className="username-input-field"
                placeholder="Start Date "
              />
              <br />
              <label className="input-label">Grade: </label>
              <br />
              <input
                type="text"
                name="grade"
                required
                className="username-input-field"
                placeholder="Grade"
              />
              <br />
              <button type="submit" className="add-btn">
                Add College
              </button>
            </form>
            <ul>
              {colleges.map((college, index) => (
                <li key={college.id}>
                  <p>College Name: {college.name}</p>
                  <p>Studied Field: {college.studied}</p>
                  <p>Start Date: {college.startDate}</p>
                  <p>End Date: {college.endDate}</p>
                  <p>Grade: {college.grade}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="experience-section">
            <h1 className="main-img-tag">Work Experience </h1>
            <form onSubmit={handleWorkExpSubmit}>
              <label className="input-label" htmlFor="collegename">
                Company Name:
              </label>
              <br></br>
              <input
                type="text"
                name="companyName"
                required
                className="username-input-field"
                placeholder="Company Name"
              />
              <br />
              <label className="input-label">Role :</label>
              <br />
              <input
                type="text"
                name="role"
                required
                className="username-input-field"
                placeholder="Role"
              />
              <br />
              <label className="input-label">Start Date: </label>
              <br />
              <input
                type="date"
                name="startJobDate"
                required
                className="username-input-field"
                placeholder="Start Date "
              />
              <br />
              <label className="input-label">End Date: </label> <br />
              <input
                type="date"
                name="endJobDate"
                required
                className="username-input-field"
                placeholder="Start Date "
              />
              <br />
              <label className="input-label">Responsibilities: </label>
              <br />
              <textarea
                type="text"
                name="response"
                required
                className="username-input-field"
                placeholder="Responsibilities "
              />
              <br />
              <button type="submit" className="add-btn">
                Add Company
              </button>
            </form>
            <ul>
              {companies.map((college, index) => (
                <li key={college.id}>
                  <p>Company Name: {college.companyName}</p>
                  <p>Role : {college.role}</p>
                  <p>Start Date: {college.startJobDate}</p>
                  <p>End Date: {college.endJobDate}</p>
                  <p>Responsibilities: {college.response}</p>
                </li>
              ))}
            </ul>
          </div>     
          <div>
          <div className="skills-section">
            <h1 className="main-img-tag">Add Skills</h1>
            <input
              type="text"
              value={skill}
              onChange={(e) => setSkill(e.target.value)}
              className="username-input-field"
              placeholder="Add Skill"
            />
            <button onClick={handleAddSkill} className="add-btn">
              Add Skill
            </button>
            <ul>
              {skillList.map((skill) => (
                <li>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="experience-section" style={{marginTop:'-37px'}}>
            <h1 className="main-img-tag">EXPERTISE</h1>
            <input
              type="text"
              value={expertise}
              onChange={(e) => setExpertise(e.target.value)}
              className="username-input-field"
              placeholder="Add expertise"
            />
            <button onClick={handleAddExpertise} className="add-btn">
              Add Expertise
            </button>
            <ul>
              {expertiseList.map((expertise) => (
                <li>{expertise}</li>
              ))}
            </ul>
          </div>
          <div className="experience-section" style={{marginTop:'-37px'}}>
            <h1 className="main-img-tag">References</h1>
            <input
              type="text"
              value={reference}
              onChange={(e) => setReference(e.target.value)}
              className="username-input-field"
              placeholder="Add reference"
            />
            <button onClick={handleReferences} className="add-btn">
              Add References
            </button>
            <ul>
              {referencesList.map((lang) => (
                <li>{lang}</li>
              ))}
            </ul>
          </div>
          <div className="description-section" style={{marginTop:'-30px'}}>
          <label className="input-label" htmlFor="ProExp">
            Description
          </label>
          <textarea
            id="ProExp"
            className="username-input-field"
            value={ProExp}
            placeholder="Description"
            type="textarea"
            onChange={(e) => setProExp(e.target.value)}
            min-height="100px"
          />
          </div>
          </div>  
          </div>

          {generatePDF()}
        </div>
      </div>
    </>
  );
};

export default Resume2