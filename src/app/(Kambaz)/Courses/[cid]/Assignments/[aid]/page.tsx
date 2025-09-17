"use client";

export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name</label>
            <input id="wd-name" defaultValue="A1 - ENV + HTML" style={{width: 150 }} /><br/><br/>

            <textarea id="wd-description" rows={8} style={{width: 600}} > 
                The assignment is avaiable online Submit a link to the landing page
                of your Web application running on Netlify. The land page should 
                include the following: Your full name and section Links to each of 
                the lab assignment Link to the Kanbas application Links to all relevent
                source code repositories The Kanbas application should include a link 
                to navigate back to the landing page.
            </textarea>
            <br/><br/>
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" defaultValue={100} style={{width:100}} />
                    </td>
                </tr><br/>

                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-group">
                            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                            <option value="QUIZZES">QUIZZES</option>
                            <option value="EXAMS">EXAMS</option>
                            <option value="PARTICIPATION">PARTICIPATION</option>
                        </select>
                    </td>
                </tr><br/>

                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade As</label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as">
                            <option value="PERCENTAGE">Percentage</option>
                            <option value="LETTER">Letter</option>
                            <option value="POINTS">Points</option>
                        </select>
                    </td>
                </tr><br/>

                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td>
                        <select id="wd-submission-type">
                            <option value="ONLINE">Online</option>
                            <option value="PAPER">Paper</option>
                            <option value="NO_SUBMISSION">No Submission</option>
                        </select><br/><br/>
                        <div>Online Entry Options</div>

                        <div>
                        <input type="checkbox" id="wd-submission-type"/>
                        <label htmlFor="wd-text-entry">Text Entry</label>
                        </div>

                        <div>
                        <input type="checkbox" id="wd-submission-type"/>
                        <label htmlFor="wd-website-url">Website URL</label>
                        </div>

                        <div>
                        <input type="checkbox" id="wd-submission-type"/>
                        <label htmlFor="wd-media-recordings">Media Recordings</label>
                        </div>

                       <div>
                        <input type="checkbox" id="wd-submission-type"/>
                        <label htmlFor="wd-student-annotation">Student Annotation</label>
                        </div>

                        <div>
                        <input type="checkbox" id="wd-submission-type"/>
                        <label htmlFor="wd-file-upload">File Uploads</label>
                        </div> 
                        
                    </td>
                </tr><br/>

                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-assign-to">Assign to</label>
                    </td>
                    <td>
                        <input id="wd-assign-to" value="Everyone"/>
                    </td>
                </tr><br/>

                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-due-date">Due</label>
                    </td>
                    <td>
                        <input type="date" defaultValue="2024-05-13" id="wd-due-date"></input>
                    </td>    
                </tr><br/>

                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-available-from">Available from</label>
                    </td>
                    <td>
                        <input type="date" defaultValue="2024-05-06" id="wd-available-from" />
                        <label htmlFor="wd-available-until">Until</label>
                        <input type="date" defaultValue="2024-05-20" id="wd-available-until" />
                    </td>
                </tr>
            </table>

            <hr style={{margin: "20px 0"}} />
            <div style={{textAlign: "right", display:"flex", gap: 8, justifyContent: "flex-end"}}>
                <button>Cancel</button>
                <button>Save</button>
            </div>
        </div>
    )
}