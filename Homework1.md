# Homework 1

*Pre-requisites: What's a metric? Whats a dimension? What's a hit? What's a session? [What are hit-level and session-level metrics?](https://www.kaushik.net/avinash/hits-sessions-metrics-dimensions-web-analytics/)*

## Analysing adobe.com/ca/

**Business Objective - To convince the user to buy/ download products by emphasizing on the ease of sharing by using the company's cloud service**

*Data being captured*:
- t - exact time of user opening the webpage
- g - current webpage 
- r - previous webpage 
- User authentication state - logged in/out
- Page performance metrics (loading times, processing times, response times etc.)
- Percentage of page viewed 
- fpCookieDomainPeriods (keeps track of number of periods in the domain name)

*Metrics*
- Scroll depth  
- User authentication  
- Amount of time the user spent on the page  
- Path followed by the user to get to the website  
- Number of sections (subdomains) in the website  
- Which buttons are clicked the most 
- Which are the most explored products/ services 
- How many go to the next topic  
- Total number of clicks on the webpage 
- Number of links clicked at (a good measure for curiosity) 
- How many use the search button (potential clients that know exactly what they want) 

Hit Level Metrics | Session Level Metrics
--- | ---
Scroll Depth | User Authentication
Time spent on page | Path followed by User to get to the page
Buttons clicked on page | Total subdomains
Total clicks on the page | Most explored products / services
Total links clicked at | How many go to the next topic
---------------------- | How many use the Search button


## Analysing winners.ca/en/fabfinds?cat=10198

**Business Objective - To leverage people's social media for marketing by showing off their personalised engagements with company products and saving money on expensive marketing campaigns while still reaching out to a wider audience.**  

*Data being captured*
- t - time of opening of webpage
- pageName 
- server name 
- language
- c8 - repeat: whether the page is refreshed or not
- day of the week
- weekday
- size of the screen 
- bw - browser window width (pixels)
- bh - browser window height (pixels)
- cc - currency code: type of currency used on the site 
- g - current URL of the page 
- j - version of javaScript 
- k - are cookies supported on the browser yes or no 
- c - color quality 

*metrics*
- Scroll depth
- Time spent on page
- Total number of clicks 
- Number of visits to partner websites (Homesense, Marshall, TJX)
- Toggles 
- page language (En / Fr)
- Most popular user instagram 
- Most popular department (Home Decor Vs. food Vs. Accessories/ clothes)
- Most in demand product
- Clicks on customer service link 
- clicks on FAQ section (more clicks may signal improving web page marketing designs on the website)
- Visits to company social media platforms 


**Hit Level Metrics** | **Session Level Metrics**
--- | ---
Scroll depth | Number of visits to partner websites
Time spent on page | Most Popular User Instagram
Total number of clicks on page | Most Popular Department
Toggles | Total Number of tools engaged on the page
Page Language | Visits to Company Social media platforms
Total number of clicks on FAQ section | ----------------------------------------
Total number of clicks on customer service link | ----------------------------------------


 [For Google Analytics Vs. Adobe Analytics](https://www.blastam.com/blog/analytics-tool-comparison-google-vs-adobe)



## [Impact of ITP2.1 on various metrics and dimensions](https://www.seerinteractive.com/blog/what-is-intelligent-tracking-prevention/)


**Apple’s Intelligent Tracking Prevention 2.1 (ITP2.1)** limits the length of client side cookies to seven days. In short this means a Safari user that visits your site today will be viewed as a new/separate user if they don’t directly interact with your site within the next seven days.

Impact of ITP2.1 on Google Analytics:
- Users
- User Type – New Vs. Returning User
- User scoped [Custom Dimensions](https://developers.google.com/analytics/devguides/reporting/core/dimsmets) - *allows combining analytics data with non analytics data* 
- User based [calculated metrics](https://thenextweb.com/insider/2016/09/27/24-examples-google-analytics-calculated-metrics/)
- Any User Scoped Segment or Audience
- Conversions/Attribution

Impact of ITP2.1 on Adobe Analytics:
- Visitors
- Visitor Type – New Vs. Return
- Visitor scoped [eVars](https://docs.adobe.com/content/help/en/analytics/implementation/analytics-basics/traffic-props-evars/props-evars.html)
- Any Visitor Scoped Segment
- Conversions/Attribution

# What needs to be done? 

As the use of third party cookies is vital to digital marketing firms, the purpose of ITP2.1 (to only allow first party cookies on the website) requires a fundamental shift in the way remarketing initiatives are carried out in the online world. 
