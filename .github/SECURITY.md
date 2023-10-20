# Security Policy

This project takes the security of its products and services seriously and follows the
[MITRE.org definition][MITRE-definition] of a security vulnerability, which is defined as:

<!-- vale off -->

> “\[A\] weakness in the computational logic (e.g., code) found in software and hardware components that, when
> exploited, results in a negative impact to confidentiality, integrity, OR availability. Mitigation of the
> vulnerabilities in this context typically involves coding changes but could also include specification changes or even
> specification deprecations (e.g., removal of affected protocols or functionality in their entirety).”
>
> **_[MITRE.org CNA Rules 7.1][MITRE-rules]_**

<!-- vale on -->

If you believe you have found such a security vulnerability in this project, please report it as soon as possible, as
described, below.

<!-- prettier-ignore-start -->
<!-- omit from toc -->
## Contents

- [Security Policy](#security-policy)
  - [Reporting security vulnerabilities](#reporting-security-vulnerabilities)
    - [Preferred language](#preferred-language)
  - [Coordinated Vulnerability Disclosure (CVD) Policy](#coordinated-vulnerability-disclosure-cvd-policy)

---
<!-- prettier-ignore-end -->

## Reporting security vulnerabilities

**_Please don't report security vulnerabilities through public GitHub Issues, Discussions, or Pull Requests._**

If you believe you have found a security vulnerability in this project, please report it through coordinated disclosure.
To do this, please file a draft [Security Advisory][advisory] with the project.

Please include as much of the following information as possible to help Project Maintainers properly address the
finding:

- The type of vulnerability - _For example, buffer overflow, SQL injection, or cross-site scripting_
- Full paths of source files related to the manifestation of the vulnerability
- The location of the affected source code - _For example, the Tag, Branch, commit or direct URL to the ref_
- Any special configuration required to reproduce the problem
- Step-by-step instructions to reproduce the problem
- Proof-of-concept or exploit code, if possible
- Impact of the vulnerability, including how an attacker might exploit the state

This information helps triage such reports more quickly.

### Preferred language

When possible, please use **English** when providing security reports.

<!-- vale off -->

## Coordinated Vulnerability Disclosure (CVD) Policy

Under the principle of Coordinated Vulnerability Disclosure, researchers disclose newly discovered vulnerabilities in
hardware, software, and services directly to the vendors of the affected product; to a national CERT or other
coordinator who will report to the vendor privately; or to a private service that will likewise report to the vendor
privately. The researcher allows the vendor the opportunity to diagnose and offer fully tested updates, workarounds, or
other corrective measures before any party discloses detailed vulnerability or exploit information to the public. The
vendor continues to coordinate with the researcher throughout the vulnerability investigation and provides the
researcher with updates on case progress. Upon release of an update, the vendor may recognize the finder for the
research and privately reporting the issue. If attacks are underway in the wild, and the vendor is still working on the
update, then both the researcher and vendor work together as closely as possible to provide early public vulnerability
disclosure to protect users. The aim is to provide timely and consistent guidance to customers to help them protect
themselves.

For more information on CVD, please review the information provided in the following links:

- [ISO/IEC 29147:2018 on Vulnerability Disclosure][ISO-29147]
- [The CERT Guide to Coordinated Vulnerability Disclosure][CERT-guide]

<!-- vale on -->

<!-- Link repository -->
<!-- editorconfig-checker-disable -->

[advisory]: https://github.com/andrewvaughan/template-core/security/advisories/new
[CERT-guide]: https://resources.sei.cmu.edu/asset_files/SpecialReport/2017_003_001_503340.pdf
[ISO-29147]: https://www.iso.org/standard/72311.html
[MITRE-definition]: https://www.cve.org/ResourcesSupport/AllResources/CNARules#section_7-1_what_is_a_vulnerability
[MITRE-rules]: https://www.cve.org/ResourcesSupport/AllResources/CNARules

<!-- editorconfig-checker-enable -->
