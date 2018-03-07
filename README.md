# csrf

A test project to demo CSRF attack. Used this as part of a presentation at Brighter

Notes:

CSRF
  high level overview
  using browser tabs,explain how csrf attack can be carried out
    logged into my bank account in one tab, i check gmail and click on link, i notice a transfer from my account has taken place

  what is csrf. explain the formal term
    how is a csrf attack planned - looking for websites with this vulnerabilty, and hunt for a link which can have maximum impact
    get such link and put it in a phising attack email
    when user clicks on the link

  demo
    
  CSRF Defenses
    1. Only basic or cookie authentication are vulnerable. localStorage or sessionStorage does not have this issue
    2. use CSRF tokens. changed with each request in an unpredictable way - its a value not in a cookie - in a way its like 2 factor authentication
    3. Validate request origin - Modern browsers send an Origin header, which cannot be altered by client-side code, with each request (IE11- does not in some cases)
    4. CORS
