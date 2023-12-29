import * as armresources from '@azure/arm-resources';
import * as armsubscriptions from '@azure/arm-subscriptions';
import * as armsql from '@azure/arm-sql';
import * as armstorage from '@azure/arm-storage';
import * as armappservice from '@azure/arm-appservice';
import * as armmonitor from '@azure/arm-monitor';
import * as armservicebus from '@azure/arm-servicebus';
import * as armkeyvault from '@azure/arm-keyvault';
import * as armcompute from '@azure/arm-compute';
import * as armeventhub from '@azure/arm-eventhub';
import * as armrediscache from '@azure/arm-rediscache';
import * as armpostgresql from '@azure/arm-postgresql';
import * as armmaps from '@azure/arm-maps';
import * as armmariadb from '@azure/arm-mariadb';
import * as armmediaservices from '@azure/arm-mediaservices';
import * as armcontainerservice from '@azure/arm-containerservice';
import * as armcontainerregistry from '@azure/arm-containerregistry';
import * as armcosmosdb from '@azure/arm-cosmosdb';
import * as armstreamanalytics from '@azure/arm-streamanalytics';
import * as armconsumption from '@azure/arm-consumption';
import * as armrecoveryservicesbackup from '@azure/arm-recoveryservicesbackup';
import * as armlocks from '@azure/arm-locks';
import * as armeventgrid from '@azure/arm-eventgrid';
import * as armresourcessubscriptions from '@azure/arm-resources-subscriptions';
import * as armpolicy from '@azure/arm-policy';
import * as armiotcentral from '@azure/arm-iotcentral';
import * as armdevtestlabs from '@azure/arm-devtestlabs';
import * as armlogic from '@azure/arm-logic';
import * as armdns from '@azure/arm-dns';
import * as armpurview from '@azure/arm-purview';
import * as armservicefabric from '@azure/arm-servicefabric';
import * as armmanagedapplications from '@azure/arm-managedapplications';
import * as armmsi from '@azure/arm-msi';
import * as armbilling from '@azure/arm-billing';
import * as armsearch from '@azure/arm-search';
import * as armmanagementgroups from '@azure/arm-managementgroups';
import * as armcdn from '@azure/arm-cdn';
import * as armresourcehealth from '@azure/arm-resourcehealth';
import * as armmachinelearningservices from '@azure/arm-machinelearningservices';
import * as armprivatedns from '@azure/arm-privatedns';
import * as armcontainerinstance from '@azure/arm-containerinstance';
import * as armauthorization from '@azure/arm-authorization';
import * as armkusto from '@azure/arm-kusto';
import * as armpowerbiembedded from '@azure/arm-powerbiembedded';
import * as armhybridcompute from '@azure/arm-hybridcompute';
import * as armsignalr from '@azure/arm-signalr';
import * as armchangeanalysis from '@azure/arm-changeanalysis';
import * as armattestation from '@azure/arm-attestation';
import * as armimagebuilder from '@azure/arm-imagebuilder';
import * as armmarketplaceordering from '@azure/arm-marketplaceordering';
import * as armcommunication from '@azure/arm-communication';
import * as armcognitiveservices from '@azure/arm-cognitiveservices';
import * as armpolicyinsights from '@azure/arm-policyinsights';
import * as armstoragecache from '@azure/arm-storagecache';
import * as armfrontdoor from '@azure/arm-frontdoor';
import * as armmixedreality from '@azure/arm-mixedreality';
import * as armpeering from '@azure/arm-peering';
import * as armfeatures from '@azure/arm-features';
import * as armnetapp from '@azure/arm-netapp';
import * as armvmwarecloudsimple from '@azure/arm-vmwarecloudsimple';
import * as armhdinsight from '@azure/arm-hdinsight';
import * as armstorageimportexport from '@azure/arm-storageimportexport';
import * as armwebservices from '@azure/arm-webservices';
import * as armstoragesync from '@azure/arm-storagesync';
import * as armpowerbidedicated from '@azure/arm-powerbidedicated';
import * as armmanagementpartner from '@azure/arm-managementpartner';
import * as armdatacatalog from '@azure/arm-datacatalog';
import * as armmigrate from '@azure/arm-migrate';
import * as armbatch from '@azure/arm-batch';
import * as armserialconsole from '@azure/arm-serialconsole';
import * as armredisenterprisecache from '@azure/arm-redisenterprisecache';
import * as armrelay from '@azure/arm-relay';
import * as armtrafficmanager from '@azure/arm-trafficmanager';
import * as armdomainservices from '@azure/arm-domainservices';
import * as armpostgresqlflexible from '@azure/arm-postgresql-flexible';
import * as armrecoveryservicessiterecovery from '@azure/arm-recoveryservices-siterecovery';
import * as armappinsights from '@azure/arm-appinsights';
import * as armappplatform from '@azure/arm-appplatform';
import * as armoperations from '@azure/arm-operations';
import * as armkubernetesconfiguration from '@azure/arm-kubernetesconfiguration';
import * as armappconfiguration from '@azure/arm-appconfiguration';
import * as armlabservices from '@azure/arm-labservices';
import * as armhanaonazure from '@azure/arm-hanaonazure';
import * as armazurestack from '@azure/arm-azurestack';
import * as armvisualstudio from '@azure/arm-visualstudio';
import * as armdatabox from '@azure/arm-databox';
import * as armmachinelearningcompute from '@azure/arm-machinelearningcompute';
import * as armdatamigration from '@azure/arm-datamigration';
import * as armdeploymentmanager from '@azure/arm-deploymentmanager';
import * as armdatalakeanalytics from '@azure/arm-datalake-analytics';
import * as armiotspaces from '@azure/arm-iotspaces';
import * as armbatchai from '@azure/arm-batchai';
import * as armvideoanalyzer from '@azure/arm-videoanalyzer';
import * as armquota from '@azure/arm-quota';
import * as armportal from '@azure/arm-portal';
import * as armorbital from '@azure/arm-orbital';
import * as armdesktopvirtualization from '@azure/arm-desktopvirtualization';
import * as armloadtestservice from '@azure/arm-loadtestservice';
import * as armextendedlocation from '@azure/arm-extendedlocation';
import * as armmachinelearningexperimentation from '@azure/arm-machinelearningexperimentation';
import * as armservicefabricmesh from '@azure/arm-servicefabricmesh';
import * as armcommitmentplans from '@azure/arm-commitmentplans';
import * as armdnsresolver from '@azure/arm-dnsresolver';
import * as armedgegateway from '@azure/arm-edgegateway';
import * as armmobilenetwork from '@azure/arm-mobilenetwork';
import * as armnetwork from '@azure/arm-network';
import * as armsynapse from '@azure/arm-synapse';
import * as armmysql from '@azure/arm-mysql';
import * as armsecurity from '@azure/arm-security';
import * as armbotservice from '@azure/arm-botservice';
import * as armtemplatespecs from '@azure/arm-templatespecs';
import * as armlinks from '@azure/arm-links';
import * as armresourcemover from '@azure/arm-resourcemover';
import * as armavs from '@azure/arm-avs';
import * as armdataboxedge from '@azure/arm-databoxedge';
import * as armdatadog from '@azure/arm-datadog';
import * as armiothub from '@azure/arm-iothub';
import * as armazurestackhci from '@azure/arm-azurestackhci';
import * as armsupport from '@azure/arm-support';
import * as armworkspaces from '@azure/arm-workspaces';
import * as armoperationalinsights from '@azure/arm-operationalinsights';
import * as armautomation from '@azure/arm-automation';
import * as armresourcegraph from '@azure/arm-resourcegraph';
import * as armcommerce from '@azure/arm-commerce';
import * as armconfluent from '@azure/arm-confluent';
import * as armservicemap from '@azure/arm-servicemap';
import * as armoep from '@azure/arm-oep';
import * as armapimanagement from '@azure/arm-apimanagement';
import * as armsqlvirtualmachine from '@azure/arm-sqlvirtualmachine';
import * as armrecoveryservices from '@azure/arm-recoveryservices';
import * as armdatabricks from '@azure/arm-databricks';
import * as armdatafactory from '@azure/arm-datafactory';
import * as armtimeseriesinsights from '@azure/arm-timeseriesinsights';
import * as armdigitaltwins from '@azure/arm-digitaltwins';
import * as armreservations from '@azure/arm-reservations';
import * as armwebpubsub from '@azure/arm-webpubsub';
import * as armnotificationhubs from '@azure/arm-notificationhubs';
import * as armhybridkubernetes from '@azure/arm-hybridkubernetes';
import * as armadvisor from '@azure/arm-advisor';
import * as armhealthbot from '@azure/arm-healthbot';
import * as armanalysisservices from '@azure/arm-analysisservices';
import * as armhealthcareapis from '@azure/arm-healthcareapis';
import * as armcustomerinsights from '@azure/arm-customerinsights';
import * as armdeviceprovisioningservices from '@azure/arm-deviceprovisioningservices';
import * as armdevspaces from '@azure/arm-devspaces';
import * as armmysqlflexible from '@azure/arm-mysql-flexible';
import * as armsecurityinsight from '@azure/arm-securityinsight';
import * as armapp from '@azure/arm-app';
import * as armtemplate from '@azure/arm-template';
import * as armchanges from '@azure/arm-changes';
import * as armservicelinker from '@azure/arm-servicelinker';
import * as armmachinelearning from '@azure/arm-machinelearning';
import * as armappcontainers from '@azure/arm-appcontainers';
import * as armconfidentialledger from '@azure/arm-confidentialledger';
import * as armdeviceupdate from '@azure/arm-deviceupdate';
import * as armdynatrace from '@azure/arm-dynatrace';
import * as armeducation from '@azure/arm-education';
import * as armhardwaresecuritymodules from '@azure/arm-hardwaresecuritymodules';
import * as armazureadexternalidentities from '@azure/arm-azureadexternalidentities';
import * as armdashboard from '@azure/arm-dashboard';
import * as armscvmm from '@azure/arm-scvmm';
export {
armresources,
armsubscriptions,
armsql,
armstorage,
armappservice,
armmonitor,
armservicebus,
armkeyvault,
armcompute,
armeventhub,
armrediscache,
armpostgresql,
armmaps,
armmariadb,
armmediaservices,
armcontainerservice,
armcontainerregistry,
armcosmosdb,
armstreamanalytics,
armconsumption,
armrecoveryservicesbackup,
armlocks,
armeventgrid,
armresourcessubscriptions,
armpolicy,
armiotcentral,
armdevtestlabs,
armlogic,
armdns,
armpurview,
armservicefabric,
armmanagedapplications,
armmsi,
armbilling,
armsearch,
armmanagementgroups,
armcdn,
armresourcehealth,
armmachinelearningservices,
armprivatedns,
armcontainerinstance,
armauthorization,
armkusto,
armpowerbiembedded,
armhybridcompute,
armsignalr,
armchangeanalysis,
armattestation,
armimagebuilder,
armmarketplaceordering,
armcommunication,
armcognitiveservices,
armpolicyinsights,
armstoragecache,
armfrontdoor,
armmixedreality,
armpeering,
armfeatures,
armnetapp,
armvmwarecloudsimple,
armhdinsight,
armstorageimportexport,
armwebservices,
armstoragesync,
armpowerbidedicated,
armmanagementpartner,
armdatacatalog,
armmigrate,
armbatch,
armserialconsole,
armredisenterprisecache,
armrelay,
armtrafficmanager,
armdomainservices,
armpostgresqlflexible,
armrecoveryservicessiterecovery,
armappinsights,
armappplatform,
armoperations,
armkubernetesconfiguration,
armappconfiguration,
armlabservices,
armhanaonazure,
armazurestack,
armvisualstudio,
armdatabox,
armmachinelearningcompute,
armdatamigration,
armdeploymentmanager,
armdatalakeanalytics,
armiotspaces,
armbatchai,
armvideoanalyzer,
armquota,
armportal,
armorbital,
armdesktopvirtualization,
armloadtestservice,
armextendedlocation,
armmachinelearningexperimentation,
armservicefabricmesh,
armcommitmentplans,
armdnsresolver,
armedgegateway,
armmobilenetwork,
armnetwork,
armsynapse,
armmysql,
armsecurity,
armbotservice,
armtemplatespecs,
armlinks,
armresourcemover,
armavs,
armdataboxedge,
armdatadog,
armiothub,
armazurestackhci,
armsupport,
armworkspaces,
armoperationalinsights,
armautomation,
armresourcegraph,
armcommerce,
armconfluent,
armservicemap,
armoep,
armapimanagement,
armsqlvirtualmachine,
armrecoveryservices,
armdatabricks,
armdatafactory,
armtimeseriesinsights,
armdigitaltwins,
armreservations,
armwebpubsub,
armnotificationhubs,
armhybridkubernetes,
armadvisor,
armhealthbot,
armanalysisservices,
armhealthcareapis,
armcustomerinsights,
armdeviceprovisioningservices,
armdevspaces,
armmysqlflexible,
armsecurityinsight,
armapp,
armtemplate,
armchanges,
armservicelinker,
armmachinelearning,
armappcontainers,
armconfidentialledger,
armdeviceupdate,
armdynatrace,
armeducation,
armhardwaresecuritymodules,
armazureadexternalidentities,
armdashboard,
armscvmm};
