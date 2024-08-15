function RenderBody() {
                
                return(
                    <div>
                        <div class="introContainer">
                            <div className="introContainerHeader">
                                <h1> Gracjan Blazejowski </h1>
                                <h2><i> Software Developer </i>|CV</h2>
                                
                            </div>
                            <div className="overviewHeader">
                                <h3>Overview:</h3>
                                <hr />
                            </div>

                            <div className="overviewSection">
                                <p>
                                     
                                    Currently developing a video game in Pygame as a leader of a small team.<br/>
                                    Tenacious programmer experienced in several programming languages, with
                                     Object-Oriented Programming (OOP) being my core expertise.<br/>
                                    Skilled in version control systems and workflow automation.
                                     First hand experience in project management, SCRUM framework and Agile methodology.
                                    Embedded programming enthusiast. Future backend engineer.
                                </p>
                            </div>

                            <div className="educationHeader">
                                <h3> Education: </h3>
                                <hr />
                            </div>

                            <div className="educationSection">



                                <div class="timeline">
                                    <div class="timelineContainer left">
                                        <div class="leftYear">
                                            <h3>2026</h3>
                                        </div>

                                        <p> Glasgow Clyde College </p>

                                        <table class="qualTable">
                                                <tr>
                                                    <th>BsC</th>
                                                    <td class="tableSplit"></td>
                                                    <td>Applied Software Development</td>
                                                </tr>                                        

                                            </table>
                                    </div>

                                    
                                    <div class="timelineContainer right">
                                        <div class="rightYear">
                                            <h3>2022</h3>
                                        </div>


                                        <p> Glasgow Clyde College </p>

                                        <table class="qualTable">
                                                <tr>
                                                    <th>HND</th>
                                                    <td class="tableSplit"></td>
                                                    <td>Music</td>
                                                </tr>
                                                <tr>
                                                    <th>ABRSM 5</th>
                                                    <td class="tableSplit"></td>
                                                    <td>Music Theory - Distinction</td>
                                                </tr>                                                

                                            </table>
                                    </div>

                                    <div class="timelineContainer left">
                                        <div class="leftYear">
                                            <h3>2018</h3>
                                        </div>
                                            <p>Springburn Academy</p>
                                            <table class="qualTable">
                                                <tr>
                                                    <th>NAT 5</th>
                                                    <td class="tableSplit"></td>
                                                    <td>Information Systems Design and Development</td>
                                                </tr>
                                                <tr>
                                                    <th>NAT 5</th>
                                                    <td class="tableSplit"></td>
                                                    <td>Software Design and Development</td>
                                                </tr>
                                                <tr>
                                                    <th>NAT 5</th>
                                                    <td class="tableSplit"></td>
                                                    <td>Music Technology - Top Scorer</td>
                                                </tr>
                                                <tr>
                                                    <th>NAT 4</th>
                                                    <td class="tableSplit"></td>
                                                    <td>Computing Science</td>
                                                </tr>
                                                <tr>
                                                    <th>Higher</th>
                                                    <td class="tableSplit"></td>
                                                    <td>Music</td>
                                                </tr>


                                            </table>

                                        
                                    </div>

                                    
                                </div>
                            
                            </div>
                            <div class="experienceHeader">
                                <h3> Experience</h3>
                            <hr></hr>
                            </div>
                            <div className="experienceSection">
                                <p>
                                    x
                                    x
                                    x
                                    x
                                    <br>
                                    
                                    </br>
                                    x
                                    x
                                </p>
                            </div>
                        </div>

                        <div class="photoContainer">
                            <div class="handsomeManContainer">
                                <img src="../assets/handsome_man.png" className="self_photo" /> <br />
                            </div>
                            <div class="socials">
                                
                                <a href="https://www.linkedin.com/in/gracjan-blazejowski-97b935233/">
                                    <div>
                                        <img src="../assets/icons/li.svg" />
                                        <p> LinkedIn </p>
                                    </div>
                                </a>

                                <a href="https://github.com/Ryboster">
                                    <div>
                                        <img src="../assets/icons/gh.svg" />
                                        <p> GitHub </p>
                                    </div>
                                </a>

                                <a href="mailto:blazejowski.biz@gmail.com">
                                    <div>
                                        <img src="../assets/icons/em.png" />
                                        <p> Email </p>
                                    </div>
                                </a> <br />
                            </div>
                            <div class="coreSkills">
                                <p style={{"color":"#CCCCCC"}}>Core Skills</p>
                                <hr/>
                                <table class="coreSkillsTable">
                                    <tr>
                                        <td>OOP <div class="tooltip">  Demonstrated application of SOLID principles in Python and Java </div></td>
                                        <td>OOAD <div class="tooltip"> Versed in creating entity-relationship and workflow diagrams. Familiar with using common design patterns.</div> </td>
                                    </tr>
                                    <tr>
                                        <td>CI/CD <div class="tooltip">Proficiency in Git workflow management and collaboration on GitHub platform.</div></td>
                                        <td>Agile</td>
                                    </tr>
                                    <tr>
                                    </tr>
                                </table>

                                <p style={{"color":"#CCCCCC"}}> Languages </p>
                                <hr/>
                                <table class="languagesTable">
                                    <tr>
                                        <td>Python</td>
                                        <td>Java</td>
                                    </tr>
                                    <tr>
                                        <td>JavaScript</td>
                                        <td>CSS</td>
                                    </tr>
                                    <tr>
                                        <td>HTML</td>
                                    </tr>
                                </table>
                            </div>

                        </div>
                    </div>

                )            
            }