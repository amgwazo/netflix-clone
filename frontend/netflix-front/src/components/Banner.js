import React from 'react'

const Banner = () => {
  return (
    <>
      <div class="banner-text  justify-content-center">
        <h1>Unlimited movies, TV shows, and more</h1>
        <h3>Watch anywhere. Cancel anytime</h3>
        <h3>
          Ready to watch? Enter your email to create or restart your membership.
        </h3>
        <div>
          <form
            action="#"
            method="post"
            aria-label="Sign up or restart your membership with Netflix."
          >
            <input
              type="text"
              name="email"
              placeholder="Email address"
              required
            />
            <button type="submit" name="submit" title="submit">
              Get Started
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Banner