import Link from "next/link";
import Image from "next/image";
export default function Dashboard () {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (7)</h2>
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <Link href="/Courses/1234" className="wd-dashboard-course-link">
                    <Image src="/images/reactjs.jpg" alt="React JS cover" width={200} height={150} />
                    <div>
                        <h5>CS1234 React JS</h5>
                        <p className="wd-dashboard-course-title">
                            Full Stack Software Developer
                        </p>
                       <button> Go </button> 
                    </div>
                    </Link>
                </div>
               <div className="wd-dashboard-course">
                    <Link href="/Courses/1500" className="wd-dashboard-course-link">
                    <Image src="/images/reactjs.jpg" alt="React JS cover" width={200} height={150} />
                    <div>
                        <h5>CS1500 Discrete Math</h5>
                        <p className="wd-dashboard-course-title">
                            Discrete Math 
                        </p>
                        <button> Go </button>
                    </div>
                    </Link>
               </div>
               <div className="wd-dashboard-course">
                    <Link href="/Courses/3033" className="wd-dashboard-course-link">
                    <Image src="/images/reactjs.jpg" alt="React JS cover" width={200} height={150} />
                    <div>
                        <h5>CS3033 Object Oriented Design</h5>
                        <p className="wd-dashboard-course-title">
                            Designing Programs 
                        </p>
                        <button> Go </button>
                    </div>
                    </Link>
               </div>
               <div className="wd-dashboard-course">
                    <Link href="/Courses/2045" className="wd-dashboard-course-link">
                    <Image src="/images/reactjs.jpg" alt="React JS cover" width={200} height={150} />
                    <div>
                        <h5>CS2045 DSA</h5>
                        <p className="wd-dashboard-course-title">
                            Algos and Data Structures
                        </p>
                        <button> Go </button>
                    </div>
                    </Link>
               </div>
               <div className="wd-dashboard-course">
                    <Link href="/Courses/4767" className="wd-dashboard-course-link">
                    <Image src="/images/reactjs.jpg" alt="React JS cover" width={200} height={150} />
                    <div>
                        <h5>MUSC4767 Music Programming</h5>
                        <p className="wd-dashboard-course-title">
                            Designing Music 
                        </p>
                        <button> Go </button>
                    </div>
                    </Link>
               </div>
               <div className="wd-dashboard-course">
                    <Link href="/Courses/1011" className="wd-dashboard-course-link">
                    <Image src="/images/reactjs.jpg" alt="React JS cover" width={200} height={150} />
                    <div>
                        <h5>ENG1011 First Year Writing</h5>
                        <p className="wd-dashboard-course-title">
                            First Year English
                        </p>
                        <button> Go </button>
                    </div>
                    </Link>
               </div>
            </div>
        </div>
    )
}