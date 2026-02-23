INSERT INTO categories (text) VALUES
    ('IP'), -- ITパスポート試験
    ('SG'), -- 情報セキュリティマネジメント試験
    ('FE'), -- 基本情報技術者試験
    ('AP'), -- 応用情報技術者試験
    ('NW'), -- ネットワークスペシャリスト試験
    ('DB'), -- データベーススペシャリスト試験
    ('ES'), -- エンベデッドシステムスペシャリスト試験
    ('SA'), -- システムアーキテクト試験
    ('PM'), -- プロジェクトマネージャ試験
    ('ST'), -- ITストラテジスト試験
    ('AU'), -- システム監査技術者試験
    ('SM'); -- ITサービスマネージャ試験

INSERT INTO questions (text, answer, category_id) VALUES
    ('CPU', 'Central Processing Unit', 4),
('GPU', 'Graphics Processing Unit', 4),
('RAM', 'Random Access Memory', 4),
('ROM', 'Read Only Memory', 4),
('SSD', 'Solid State Drive', 4),
('HDD', 'Hard Disk Drive', 4),
('BIOS', 'Basic Input Output System', 4),
('USB', 'Universal Serial Bus', 4),
('HDMI', 'High-Definition Multimedia Interface', 4),
('IEEE', 'Institute of Electrical and Electronics Engineers', 4),
('RISC', 'Reduced Instruction Set Computer', 4),
('CISC', 'Complex Instruction Set Computer', 4),
('RAID', 'Redundant Arrays of Inexpensive Disks', 4),
('DMA', 'Direct Memory Access', 4),
('OCR', 'Optical Character Reader', 4),
('OMR', 'Optical Mark Reader', 4),
('GUI', 'Graphical User Interface', 4),
('CUI', 'Character User Interface', 4),
('MIPS', 'Million Instructions Per Second', 4),
('FLOPS', 'Floating-point Operations Per Second', 4),

-- 【21-40】ネットワーク・通信プロトコル
('OSI', 'Open Systems Interconnection', 4),
('TCP', 'Transmission Control Protocol', 4),
('IP', 'Internet Protocol', 4),
('HTTP', 'HyperText Transfer Protocol', 4),
('HTTPS', 'HyperText Transfer Protocol Secure', 4),
('FTP', 'File Transfer Protocol', 4),
('SMTP', 'Simple Mail Transfer Protocol', 4),
('POP', 'Post Office Protocol', 4),
('IMAP', 'Internet Message Access Protocol', 4),
('DHCP', 'Dynamic Host Configuration Protocol', 4),
('DNS', 'Domain Name System', 4),
('MAC', 'Media Access Control', 4),
('LAN', 'Local Area Network', 4),
('WAN', 'Wide Area Network', 4),
('VPN', 'Virtual Private Network', 4),
('SSL', 'Secure Sockets Layer', 4),
('TLS', 'Transport Layer Security', 4),
('SNMP', 'Simple Network Management Protocol', 4),
('NTP', 'Network Time Protocol', 4),
('ICMP', 'Internet Control Message Protocol', 4),

-- 【41-60】セキュリティ・暗号化
('CIA', 'Confidentiality, Integrity, Availability', 4),
('AES', 'Advanced Encryption Standard', 4),
('RSA', 'Rivest-Shamir-Adleman', 4),
('PKI', 'Public Key Infrastructure', 4),
('CA', 'Certificate Authority', 4),
('IDS', 'Intrusion Detection System', 4),
('IPS', 'Intrusion Prevention System', 4),
('WAF', 'Web Application Firewall', 4),
('DMZ', 'DeMilitarized Zone', 4),
('DoS', 'Denial of Service', 4),
('DDoS', 'Distributed Denial of Service', 4),
('SQLi', 'SQL Injection', 4),
('XSS', 'Cross Site Scripting', 4),
('CSRF', 'Cross Site Request Forgery', 4),
('APT', 'Advanced Persistent Threat', 4),
('BYOD', 'Bring Your Own Device', 4),
('MDM', 'Mobile Device Management', 4),
('SIEM', 'Security Information and Event Management', 4),
('ISMS', 'Information Security Management System', 4),
('CSIRT', 'Computer Security Incident Response Team', 4),

-- 【61-80】データベース・開発手法
('DBMS', 'DataBase Management System', 4),
('SQL', 'Structured Query Language', 4),
('ACID', 'Atomicity, Consistency, Isolation, Durability', 4),
('ERD', 'Entity Relationship Diagram', 4),
('UML', 'Unified Modeling Language', 4),
('CASE', 'Computer Aided Software Engineering', 4),
('OOP', 'Object Oriented Programming', 4),
('SDLC', 'Software Development Life Cycle', 4),
('TDD', 'Test Driven Development', 4),
('CI', 'Continuous Integration', 4),
('CD', 'Continuous Delivery', 4),
('CVS', 'Concurrent Versions System', 4),
('OSS', 'Open Source Software', 4),
('API', 'Application Programming Interface', 4),
('SaaS', 'Software as a Service', 4),
('PaaS', 'Platform as a Service', 4),
('IaaS', 'Infrastructure as a Service', 4),
('SOA', 'Service Oriented Architecture', 4),
('JSON', 'JavaScript Object Notation', 4),
('XML', 'eXtensible Markup Language', 4),

-- 【81-100】マネジメント・ストラテジ・経営
('WBS', 'Work Breakdown Structure', 4),
('PMBOK', 'Project Management Body of Knowledge', 4),
('SLA', 'Service Level Agreement', 4),
('SLM', 'Service Level Management', 4),
('ITIL', 'Information Technology Infrastructure Library', 4),
('ROI', 'Return On Investment', 4),
('TCO', 'Total Cost of Ownership', 4),
('KPI', 'Key Performance Indicator', 4),
('BSC', 'Balanced Score Card', 4),
('SWOT', 'Strengths, Weaknesses, Opportunities, Threats', 4),
('ERP', 'Enterprise Resource Planning', 4),
('CRM', 'Customer Relationship Management', 4),
('SCM', 'Supply Chain Management', 4),
('BPO', 'Business Process Outsourcing', 4),
('BPR', 'Business Process Reengineering', 4),
('BCP', 'Business Continuity Plan', 4),
('BCM', 'Business Continuity Management', 4),
('RFP', 'Request For Proposal', 4),
('RFI', 'Request For Information', 4),
('NDA', 'Non-Disclosure Agreement', 4); 
