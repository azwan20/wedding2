import Navbar from "./navbar";

export default function Maps() {
    return (
        <>
            <div className="maps">
                <section className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7947.185772160316!2d119.4275203!3d-5.1689999!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbee2b66bf04dbb%3A0x1fed8c8d21d796ce!2sCLARO%20HOTEL%20MAKASSAR!5e0!3m2!1sid!2sid!4v1718270041974!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </section>
                <section>
                    <p>Hotel Amsterdam</p>
                    <p>Jl. Jendral Sudirman, No. 10</p>
                    <p>Ambon, Maluku</p>
                </section>
                <button>Petunjuk Lokasi</button>
            </div>
        </>
    )
}