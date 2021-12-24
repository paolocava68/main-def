import React, { useEffect } from "react";
import { useParams } from "react-router";
import {MDBCol} from "mdb-react-ui-kit";

function Post() {
  let { postSlug } = useParams();

  useEffect(() => {
    // Fetch post using the postSlug
  }, [postSlug]);

  return (
      <MDBCol className={'col-xl-12'}>
        <div id="intro" className="p-5 text-center bg-light">
          <h1 className="mb-0 h4">{postSlug}</h1>
        </div>
        <div class="row">
          <div class="col-md-12 mb-4">
            <section class="border-bottom mb-4">
              <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(144).jpg"
                   className="img-fluid shadow-2-strong rounded-5 mb-4" alt="" />

              <div class="row align-items-center mb-4">
                <div class="col-lg-6 text-center text-lg-start mb-3 m-lg-0">
                  <img src="https://mdbootstrap.com/img/Photos/Avatars/img (23).jpg" class="rounded-5 shadow-1-strong me-2"
                       height="35" alt="" loading="lazy" />
                  <span> Published <u>15.07.2020</u> by</span>
                  <a href="" class="text-dark">Anna</a>
                </div>

                <div class="col-lg-6 text-center text-lg-end">
                  <button type="button" class="btn btn-primary px-3 me-1" style={{backgroundColor: '#3b5998'}}>
                    <i class="fab fa-facebook-f"></i>
                  </button>
                  <button type="button" class="btn btn-primary px-3 me-1" style={{backgroundColor: '#55acee'}}>
                    <i class="fab fa-twitter"></i>
                  </button>
                  <button type="button" class="btn btn-primary px-3 me-1" style={{backgroundColor: '#0082ca'}}>
                    <i class="fab fa-linkedin"></i>
                  </button>
                  <button type="button" class="btn btn-primary px-3 me-1">
                    <i class="fas fa-comments"></i>
                  </button>
                </div>
              </div>
            </section>
            <section>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio sapiente molestias
                consectetur. Fuga nulla officia error placeat veniam, officiis rerum laboriosam
                ullam molestiae magni velit laborum itaque minima doloribus eligendi! Lorem ipsum,
                dolor sit amet consectetur adipisicing elit. Optio sapiente molestias consectetur.
                Fuga nulla officia error placeat veniam, officiis rerum laboriosam ullam molestiae
                magni velit laborum itaque minima doloribus eligendi!
              </p>

              <p><strong>Optio sapiente molestias consectetur?</strong></p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum architecto ex ab aut
                tempora officia libero praesentium, sint id magnam eius natus unde blanditiis. Autem
                adipisci totam sit consequuntur eligendi.
              </p>

              <p class="note note-light">
                <strong>Note:</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Optio odit consequatur porro sequi ab distinctio modi. Rerum cum dolores sint,
                adipisci ad veritatis laborum eaque illum saepe mollitia ut voluptatum.
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, libero repellat
                molestiae aperiam laborum aliquid atque magni nostrum, inventore perspiciatis
                possimus quia incidunt maiores molestias eaque nam commodi! Magnam, labore.
              </p>

              <img src="https://mdbootstrap.com/img/new/slides/041.jpg" class="img-fluid shadow-1-strong rounded-5 mb-4"
                   alt="" />

              <ul>
                <li>Lorem</li>
                <li>Ipsum</li>
                <li>Dolor</li>
                <li>Sit</li>
                <li>Amet</li>
              </ul>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, temporibus nulla
                voluptatibus accusantium sapiente doloremque. Doloribus ratione laboriosam culpa. Ab
                officiis quidem, debitis nostrum in accusantium dolore veritatis eius est?
              </p>
            </section>
            <section class="text-center border-top border-bottom py-4 mb-4">
              <p><strong>Share with your friends:</strong></p>

              <button type="button" class="btn btn-primary me-1" style={{backgroundColor: '#3b5998'}}>
                <i class="fab fa-facebook-f"></i>
              </button>
              <button type="button" class="btn btn-primary me-1" style={{backgroundColor: '#55acee'}}>
                <i class="fab fa-twitter"></i>
              </button>
              <button type="button" class="btn btn-primary me-1" style={{backgroundColor: '#0082ca'}}>
                <i class="fab fa-linkedin"></i>
              </button>
              <button type="button" class="btn btn-primary me-1">
                <i class="fas fa-comments me-2"></i>Add comment
              </button>
            </section>
            <section class="border-bottom mb-4 pb-4">
              <div class="row">
                <div class="col-3">
                  <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(23).jpg"
                       class="img-fluid shadow-1-strong rounded-5" alt="" />
                </div>

                <div class="col-9">
                  <p class="mb-2"><strong>Anna Maria Doe</strong></p>
                  <a href="" class="text-dark"><i class="fab fa-facebook-f me-1"></i></a>
                  <a href="" class="text-dark"><i class="fab fa-twitter me-1"></i></a>
                  <a href="" class="text-dark"><i class="fab fa-linkedin me-1"></i></a>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio est ab iure
                    inventore dolorum consectetur? Molestiae aperiam atque quasi consequatur aut?
                    Repellendus alias dolor ad nam, soluta distinctio quis accusantium!
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </MDBCol>
  );
}

export default Post;
