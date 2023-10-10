# Security Policy

This project take the security of its products and services seriously and follows the
[MITRE.org definition][MITRE-definition] of a security vulnerability, which defines a security vulnerability as:

> “\[A\] weakness in the computational logic (e.g., code) found in software and hardware components that, when
> exploited, results in a negative impact to confidentiality, integrity, OR availability. Mitigation of the
> vulnerabilities in this context typically involves coding changes but could also include specification changes or even
> specification deprecations (e.g., removal of affected protocols or functionality in their entirety).”

**_--[MITRE.org CNA Rules][MITRE-rules] 7.1_**

If you believe you have found such a security vulnerability in this project, please report it to us as soon as possible,
as described, below.

## Contents

- [Security Policy](#security-policy)
  - [Contents](#contents)
  - [Reporting Security Issues](#reporting-security-issues)
    - [Preferred Language](#preferred-language)
  - [Coordinated Vulnerability Disclosure Policy](#coordinated-vulnerability-disclosure-policy)

## Reporting Security Issues

**_Please do not report security vulnerabilities through public GitHub issues, discussions, or pull requests._**

If you believe you have found a security vulnerability in this project, please report it to us through coordinated
disclosure. To do this, please email the project owner at [hello@andrewvaughan.io][email].

Please include as much of the following information as possible to help us come to properly address the finding:

- The type of issue _(e.g., buffer overflow, SQL injection, or cross-site scripting)_
- Full paths of source file(s) related to the manifestation of the issue
- The location of the affected source code _(i.e., tag/branch/commit or direct URL)_
- Any special configuration required to reproduce the issue
- Step-by-step instructions to reproduce the issue
- Proof-of-concept or exploit code _(if possible)_
- Impact of the issue, including how an attacker might exploit the issue

This information will help us triage your report more quickly.

### Preferred Language

When possible, please use English when providing security reports.

## Coordinated Vulnerability Disclosure Policy

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

<!-- Link Repository -->

<!-- editorconfig-checker-disable -->

[email]: mailto:hello@andrewvaughan.io?subject=GitHub%20Project%20Security%20Disclosure&body=Please%20provide%20the%20following%20information%3A%0A%0AType%20of%20issue%3A%0A(e.g.%20buffer%20overflow%2C%20SQL%20injection%2C%20cross-site%20scripting%2C%20etc.)%0A%0AFull%20paths%20of%20source%20file(s)%20related%20to%20the%20manifestation%20of%20the%20issue%3A%0A%0AThe%20location%20of%20the%20affected%20source%20code%3A%0A(i.e..%2C%20tag%2Fbranch%2Fcommit%20or%20direct%20URL)%0A%0AAny%20special%20configuration%20required%20to%20reproduce%20the%20issue%3A%0A%0AStep-by-step%20instructions%20to%20reproduce%20the%20issue%3A%0A%0AProof-of-concept%20or%20exploit%20code%20(if%20possible)%3A%0A%0AImpact%20of%20the%20issue%2C%20including%20how%20an%20attacker%20might%20exploit%20the%20issue%3A%0A
[CERT-guide]: https://resources.sei.cmu.edu/asset_files/SpecialReport/2017_003_001_503340.pdf
[ISO-29147]: https://www.iso.org/standard/72311.html
[MITRE-definition]: https://www.cve.org/ResourcesSupport/AllResources/CNARules#section_7-1_what_is_a_vulnerability
[MITRE-rules]: https://www.cve.org/ResourcesSupport/AllResources/CNARules

<!-- editorconfig-checker-enable -->
