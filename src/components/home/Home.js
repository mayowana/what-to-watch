import styles from './Home.module.scss'

const Home = () => { 

    return (
        <>
            <div className={styles.home}>
                <div className={styles.homeheader}>
                    <h1>What To Watch On Netflix</h1>
                    <p>Find something that matches your mood</p>
                </div>
                <div className={styles.selector}>
                    <form>
                        <p>Are you looking for a movie or TV show?</p>
                        <input type='radio' id='movie' name='category' value='Movie'></input>
                        <label for='movie'>Movie</label>
                        <input type='radio' id='tvshow' name='category' value='TV Show'></input>
                        <label for='tvshow'>TV Show</label>

                        <p>How are you feeling right now?</p>
                        <input type='radio' id='angry' name='mood' value='angry'></input>
                        <label for='angry'>Angry</label>
                        <input type='radio' id='sad' name='mood' value='sad'></input>
                        <label for='sad'>Sad</label>
                        <input type='radio' id='calm' name='mood' value='calm'></input>
                        <label for='calm'>Calm</label>
                        <input type='radio' id='bored' name='mood' value='bored'></input>
                        <label for='bored'>Bored</label>
                        <input type='radio' id='happy' name='mood' value='happy'></input>
                        <label for='happy'>Happy</label>
                        <input type='radio' id='inlove' name='mood' value='inlove'></input>
                        <label for='inlove'>In love</label>
                        <input type='radio' id='heartbroken' name='mood' value='heartbroken'></input>
                        <label for='heartbroken'>Heartbroken</label>
                        <input type='radio' id='stressed' name='mood' value='stressed'></input>
                        <label for='stressed'>Stressed</label>

                        <br></br>

                        <input type='submit' value='Find something for me'></input>
                    </form>
                </div>
            </div>
        </>
    )
};

export default Home;