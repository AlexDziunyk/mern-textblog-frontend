import '../styles/About.css'

const About = () => {
    return (
        <div className="about__container">
            <h2 className='about__title'>About</h2>
            <p className='about__text'>This simple blogs was created to show my skills of React and Node.
                <br/>The stack of technologies MERN was used for this project.
                <br/>What can you do in this app?
                <br/>Firstly, you can add and delete blogs.
                <br/>Secondly, you can see only blogs that added by yourself!
                <br/>Finally, you can create multiple accounts in here. You are not able to see blogs until you logged in
                <br/>Actually, I'm planning on upgrading the whole project, this is just the first
                version for my portfolio.
                <br/>Thank you for visiting this project!
            </p>
        </div>
    )
}

export default About
