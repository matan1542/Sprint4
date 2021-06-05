
import { Feature } from './Feature'


export function Features() {


  return (
    <section className="dark-section" id="features">
      <div className="container">
        <h3 className="section-title">Meet our powerful Platform</h3>
        <Feature>
          <div className="text-container">
            <h2>Build a website easily!</h2>
            <p>
              Start from scratch or choose a designer-made template. Get
              started extremely fast with our simple and intuitive website
              builder which will allow you with no coding skills to maintain
              high customizabilty options.
              </p>
          </div>
          <img src="images/feature4.png" alt="feature1" />
        </Feature>
        <Feature>
          <img src="images/feature2.png" alt="feature2" />
          <div className="text-container">
            <h2>Suited for any of your needs</h2>
            <p>
              Design and build your own high-quality websites. Whether you’re
              promoting your business, showcasing your work, opening your
              store or starting a blog—you can do it all with the WeBuild
              website builder.
              </p>
          </div>
        </Feature>

        <Feature>
          <div className="text-container">
            <h2>Just Drag &amp; Drop</h2>
            <p>
              With a super most innovative drag and drop website builder, you
              can design any website you want. Just Drag, Drop and Customize!
              </p>
          </div>
          <img src="images/feature3.png" alt="feature3" />
        </Feature>
      </div>
    </section>
  );
}


